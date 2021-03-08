import React, { useState, useEffect } from 'react';
import axios from "axios"
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@material-ui/core';
import "./stylesheets/style.css"
import Images from "../images/images"
import Custom_modal from "../custom_modal/custom_modal"

export default function Photos_list() {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalURL, setModalURL] = useState("");
  const [curModalIndex, setCurModalIndex] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getPhotos()
    
  }, []);

  const getPhotos = () => {
    console.log("called")
    const newPage = page + 1
    setPage(newPage)
    const url = `https://api.unsplash.com/photos/?client_id=EEBCqvlXCuQp0BAsRGMo6-Qzbs8SNB68eA_KwjdfgW8&per_page=100&page=` + newPage
    axios.get(url).then((res) => {
      var newArr = []
      res.data.forEach(imageData => {
        newArr.push(imageData.urls.thumb)
      });

      const newList = [...photos, ...newArr]
      console.log(newList)
      setPhotos(newList)
      setModalURL(newList[0])
    })
  }

  const openModalHandler=(index)=>{
 
      setMessage("")
      setIsOpen(true)
      setModalURL(photos[index])
      setCurModalIndex(index)


  }

  const closeModalHandler=(index)=>{
    setIsOpen(false)
    
  }

  const nextPictureHandler=(index)=>{
    if (index== photos.length-1){
      getPhotos()
    }
    setModalURL(photos[index+1])
    setCurModalIndex(curModalIndex+1)
    setMessage("")
  }

  const prevPictureHandler=(index)=>{
    if(index>=1){
      setModalURL(photos[index-1])
      setCurModalIndex(curModalIndex-1)
    }else{
      setMessage("You are already on first picture")
    }

  }


  return (<>
    <Custom_modal IsOpen={isOpen} Index={curModalIndex} URL={modalURL} CloseModal={closeModalHandler} Next={nextPictureHandler} Prev={prevPictureHandler} Message={message}/>
    <InfiniteScroll dataLength={photos.length} next={getPhotos} hasMore={true} className="listOuterDiv" >

      {photos.map((url,index) => (
        <div className="imageWrapper">
          <Images URL={url} Index={index} Key={index} OpenModal={openModalHandler}/>
        </div>
      ))}
      <CircularProgress />
    </InfiniteScroll>

</>
  );
}


