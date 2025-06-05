import React from "react";

export default function AboutUs(props) {
  return (
    <div
      className="lead mb-4 info-box"
      style={{
        border: "2px solid #0d6efd",
        padding: "30px",
        borderRadius: "12px",
        backgroundColor: "#f8f9fa",
        color: "#212529",
        lineHeight: "1.8",
      }}
    >
      <h2 className="mb-2" style={{ color: "#0d6efd" }}>{props.text}</h2>

      <p>
        <strong>TextUtils</strong> is a powerful and easy-to-use text utility tool built with React.
        Whether you're a student, developer, writer, or just someone working with lots of text,
        this tool helps you manipulate and analyze your text effortlessly.
      </p>

      <p><strong>🔧 Features:</strong></p>
      <ul>
        <li>Convert text to <strong>Uppercase</strong> or <strong>Lowercase</strong></li>
        <li><strong>Clear</strong> all text instantly</li>
        <li><strong>Copy</strong> text to clipboard</li>
        <li>Remove <strong>extra spaces</strong> in one click</li>
        <li>Get <strong>word and character count</strong></li>
        <li><strong>Preview</strong> text live as you type</li>
        <li><strong>Dark/Light mode</strong> for better accessibility</li>
      </ul>

      <p><strong>📌 Use Cases:</strong></p>
      <ul>
        <li>Cleaning up copied content from the web</li>
        <li>Checking word count while writing</li>
        <li>Formatting emails or social media posts</li>
        <li>Writing content with clean structure</li>
      </ul>

      <p className="mt-4"><strong>🚀 Future Plans:</strong> We're planning to add grammar check, text-to-speech, find & replace, and PDF export features soon.</p>

      <p className="mt-4">
        <strong>👨‍💻 Developed by:</strong> Himanshu Prajapati<br />
        <strong>📅 Version:</strong> 1.0.0
      </p>
    </div>
  );
}
