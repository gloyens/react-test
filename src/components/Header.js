import React from "react";
import Button from "./Button";
import "../index.css";

const Header = ({ showForm, changeTextAndColour }) => {
  return (
    <header className="header">
      <h2 className="app-header">Task Manager App</h2>
      <Button
        onClick={showForm}
        colour={changeTextAndColour ? "#ff4444" : "forestgreen"}
        text={changeTextAndColour ? "Close Form" : "Add Task"}
      />
    </header>
  )
}

export default Header
