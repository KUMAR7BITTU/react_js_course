import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
    }

    const handleOnChange = ()=>{
        console.log("On change");
    }

    const [text,setText] = useState('Enter text here');
    // text = "new text"; 
    // wrong way to set text (ABOVE WAY)
    // setText("new text");
    // Correct way to set text 
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value = {text}
          onchange={handleOnChange} id="myBox"
          rows="15"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
