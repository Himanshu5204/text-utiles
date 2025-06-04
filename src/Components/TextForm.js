import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [findWord, setFindWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");

  const [text, setText] = React.useState("Enter your text here");
  // useState is a hook that allows you to add state to functional components
  // text is the current state default value , setText is the function to update the state

  //text=uihaih // wrong way to change state, this will not work as expected
  //setText("uihaih"); // this is the correct way to change state

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  const handleOnChange = (event) => {
    // console.log("Text changed"); // This will log every time the text changes
    // console.log(event.target.value); // This will log the current value of the textarea
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    // console.log("Convert to Uppercase clicked");
    let newText = text.toUpperCase();
    // console.log(newText);
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowerCase = () => {
    // console.log("Convert to Lowercase clicked");
    let newText = text.toLowerCase();
    // console.log(newText);
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearText = () => {
    // console.log("Clear Text clicked");
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyText = () => {
    // console.log("Copy Text clicked");
    navigator.clipboard.writeText(text);
    //alert("Text copied to clipboard");
    props.showAlert("Text copied to clipboard!", "success");
  };

  // navigator.clipboard.writeText is used to copy text to clipboard
  // alert is used to show a message to the user

  const handleRemoveExtraSpaces = () => {
    // console.log("Remove Extra Spaces clicked");
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  // Handler Functions
  const handleCapitalizeWords = () => {
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    props.showAlert("Words capitalized!", "success");
  };

  const handleReverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text reversed!", "success");
  };

  const handleFindAndReplace = () => {
    if (!findWord) {
      props.showAlert("Find word cannot be empty", "warning");
      return;
    }

    if (!text.includes(findWord)) {
      props.showAlert(`"${findWord}" not found in text`, "danger");
      return;
    }

    let newText = text.replaceAll(findWord, replaceWord);
    setText(newText);
    props.showAlert(
      `Replaced all "${findWord}" with "${replaceWord}"`,
      "success"
    );
  };

  const convertTextToNumber = () => {
    const numberWords = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
    };

    let words = text.split(" ");
    let found = false;

    let newText = words
      .map((word) => {
        const lower = word.toLowerCase();
        if (numberWords[lower] !== undefined) {
          found = true;
          return numberWords[lower];
        }
        return word;
      })
      .join(" ");

    if (!found) {
      props.showAlert("No number words (zero-ten) found to convert", "warning");
    } else {
      setText(newText);
      props.showAlert("Converted number words to digits", "success");
    }
  };

  return (
    <>
      <div className="container text-center mb-4">
        <h1 style={{ marginTop: "25px" }}>{props.heading}</h1>
      </div>
      <div className="container text-center mb-4">
        <p className="lead mb-4">
          Use the buttons below to manipulate the text in the textarea.
        </p>
      </div>

      <div className="container mt-4 mb-4">
        <div className="mb-3 w-50 mx-auto">
          <textarea
            className="form-control"
            placeholder="Write something here"
            id="plainTextarea"
            style={{ height: "100px" }}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="mb-3 w-50 mx-auto d-flex flex-wrap justify-content-center gap-2">
          <button className="btn btn-primary" onClick={handleUpperCase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-secondary" onClick={handleLowerCase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-success" onClick={handleClearText}>
            Clear Text
          </button>
          <button className="btn btn-danger" onClick={handleCopyText}>
            Copy Text
          </button>
          <button className="btn btn-warning" onClick={handleRemoveExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-info" onClick={handleCapitalizeWords}>
            Capitalize Words
          </button>
          <button className="btn btn-dark" onClick={handleReverseText}>
            Reverse Text
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={convertTextToNumber}
          >
            Convert Text to Number
          </button>
        </div>

        <div className="mb-3 w-50 mx-auto text-center">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Find..."
            value={findWord}
            onChange={(e) => setFindWord(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Replace with..."
            value={replaceWord}
            onChange={(e) => setReplaceWord(e.target.value)}
          />
          <button
            className="btn btn-outline-success mb-3"
            onClick={handleFindAndReplace}
          >
            Find and Replace
          </button>
        </div>
        <hr />
        <div className="text-center">
          <p>
            <strong>Word Count:</strong> {wordCount} |{" "}
            <strong>Character Count:</strong> {charCount}
          </p>
        </div>
        <p className="text-center">
          <strong>Note:</strong> The word count excludes extra spaces and empty
          lines.
          <br />
          The character count includes all characters, including spaces.
        </p>
        <p className="text-center">
          {" "}
          <strong>{0.008 * text.split(" ").length}</strong> minutes to read data 
        </p>
        <hr />
        <div className="text-center">
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview !"}</p>
        </div>
      </div>
    </>
  );
}
