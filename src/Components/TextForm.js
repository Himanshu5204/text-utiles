import React from "react";

export default function TextForm() {
  return (
    <>
      <div className="container text-center mb-4">
        <h1 style={{ marginTop: "60px" }}>Welcome to Text Utility App</h1>
        <div
          className="lead mb-4 info-box"
          style={{
            border: "2px solid #000",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <p style={{ marginTop: "20px" }} className="lead mb-4">
            This is a simple text utility app built with React. You can use it
            to manipulate text in various ways.
          </p>
          <p className="lead mb-4">
            <strong>Features:</strong> Convert text to uppercase, lowercase,
            clear, copy and more.
          </p>
          <p className="lead mb-4">
            <strong>Note:</strong> This app is a work in progress. More features
            will be added soon.
          </p>
          <p className="lead mb-4">
            <strong>Author:</strong> Himanshu Prajapati
          </p>
        </div>
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
          ></textarea>
        </div>
        <div className="mb-3 w-50 mx-auto d-flex flex-wrap justify-content-center gap-2">
          <button type="button" className="btn btn-primary">
            Convert to Uppercase
          </button>
          <button type="button" className="btn btn-secondary">
            Convert to Lowercase
          </button>
          <button type="button" className="btn btn-success">
            Clear Text
          </button>
          <button type="button" className="btn btn-danger">
            Copy Text
          </button>
          <button type="button" className="btn btn-warning">
            Remove Extra Spaces
          </button>
        </div>
      </div>
    </>
  );
}
