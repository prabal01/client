import React from 'react';
import ReactModal from "react-modal"
import "./stylesheets/style.css"
import NextIcon from "./media/next.svg"
export default function Picture_modal(props) {
    return (
        <div>
            <ReactModal isOpen={props.IsOpen} >
                <div className="modalMainDiv">
                    <div className="closeButtonDiv">
                    <img src="NextIcon" alt=""/>
                        <button className="closeButton" onClick={() => props.CloseModal()}>X</button>
                    </div>
                    <div className="message">

                        <p>{props.Message}</p>
                    </div>
                    <div className="mainPicDiv">
                        <div className="prevButton">
                            <button onClick={() => props.Prev(props.Index)}></button>
                        </div>
                        <div className="pic">

                            <img src={props.URL} alt="" />
                        </div>
                        <div className="nextButton">

                            <button onClick={() => props.Next(props.Index)}>  </button>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}
