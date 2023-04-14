import React from "react";
import './ButtonContainer.css'

function ButtonConainer(props) {
  return (
    <div className="btnContainer">
      <button
        type="button"
        className="btn"        
        onClick={props.onSubmits}
      >
        {props.title}
      </button>
    </div>
  );
}

export default ButtonConainer;
