import React from 'react';

function Images(props) {
  return (
    <div>
      <img src={props.URL} alt="" onClick={()=>props.OpenModal(props.Index)} />
    </div>
  );
}

export default Images;
