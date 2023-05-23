import React, { useState } from "react";
export default function TextForm(props) {
  //State allows us to manage changing data in an application
  const [text, setText] = useState("");
  //   text="new state"; //wrong way to change state
  // setText("abcdef"); //correct way to change state
  const handleUpText = () => {
    // console.log("Up Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "Success");
  };
  const handleChange = (event) => {
    // console.log(event);
    setText(event.target.value);
  };
  const handleLowText = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "Success");
  };
  const handleClearText = () => {
    const newText = " ";
    setText(newText);
    props.showAlert("Text got cleared", "Success");
  };
  const handleReverseText = () => {
    const revArray = [];
    const length = text.length - 1;

    // Looping from the end
    for (let i = length; i >= 0; i--) {
      revArray.push(text[i]);
    }

    // Joining the array elements
    setText(revArray.join(""));
    props.showAlert("Converted to reverse text", "Success");
  };
  const handleExtraSpaces = () => {
    let newText = text.trim();
    setText(newText);
    props.showAlert("Remove extra spaces", "Success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpText}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-1" onClick={handleLowText}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearText}>
          Clear text
        </button>
        <button className="btn btn-warning mx-1" onClick={handleReverseText}>
          Reverse text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * text.trim() === "" ? 0 : text.trim().split(" ").length}{" "}
          Minutes required to read
        </p>
      </div>
    </>
  );
}
