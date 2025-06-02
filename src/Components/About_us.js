import React from 'react'

export default function About_us() {
  return (
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
  )
}
