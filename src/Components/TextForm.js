import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","Done");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase","Done");
  };
  const handleClearClick = () => {
    let Set = "";
    setText(Set);
  };
  const handleClick = () => {
    let Set = "";
    setText(Set);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard","Done");
  };

  const MathR = () => {
    return Math.round(0.48 * text.split("").length);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className=" container my-3">
          <h2 className={` text-${props.mode === "light" ? "dark" : "light"}`}>
            {props.heading}
          </h2>
          <div className="mb-3">
            <textarea
              className="form-control "
              value={text}
              onChange={handleOnChange}
              id="mybox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Upperclass
          </button>
          <button className="btn btn-danger" onClick={handleLoClick}>
            Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear
          </button>
          <button className="btn btn-danger mx-2" onClick={handleClick}>
            Upload a file
          </button>
          <button className="btn btn-warning mx-2" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
      <div className={`container my-3 `}>
        <div className={` text-${props.mode === "light" ? "dark" : "light"}`}>
          <h1> Your text summary</h1>
          <p>
            {text.split("").length-text.split(" ").length +1} words and {text.length} characters
          </p>
          <p> {MathR()} Seconds read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
