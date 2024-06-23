import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text has been Cleared", "success")
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed", "success")
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#262254",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} disabled={text.length === 0}>
          Convert To Upper Case
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick} disabled={text.length === 0}>
          Convert To Lower Case
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleClear} disabled={text.length === 0}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy} disabled={text.length === 0}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} disabled={text.length === 0}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=> {return element.length !== 0}).length} words and {text.length} charecters
        </p>
        <p>Reading time {0.008 * text.split(" ").filter((element)=> {return element.length !== 0}).length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter Something"}</p>
      </div>
    </>
  );
}
