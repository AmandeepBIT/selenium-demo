import React from "react";
import './TextBox.css'
function TextBox(props) {
  return (
    <input className="textContainer"
      type={props.needSecure === true ? "password" : "text"}
      name="email"      
      placeholder={props.placeholder}
      id={props.id}
      autoComplete="off"
      value={props.val}
      onChange={props.onChangeText}
    ></input>
  );
}

export default TextBox;
