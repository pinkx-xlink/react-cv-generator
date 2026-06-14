import { useState } from "react";
import "../styles/Text.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap/Button";
// import { ThemeProvider } from "react-bootstrap";
//import { ButtonGroup } from "react-bootstrap/ButtonGroup";

export default function Text({ inputField, message, dispatch }) {
  const storedMessages = [];
  return (
    <section className="text">
      <textarea
        value={message}
        placeholder={"Textarea for " + inputField.name}
        onChange={(e) => {
          // storedMessages.push(e.target.value)
          dispatch({
            type: "EDITED_MESSAGE",
            message: e.target.value,
          });
        }}
      />
      <button
        onClick={(e) => {
          alert(message);
          // storedMessages.push(message)
          dispatch({
            type: "SENT_MESSAGE",
          });
        }}
      >
        Send to {inputField.name}
      </button>

      <ul>
        <li>{storedMessages}</li>
      </ul>
    </section>
  );
}
