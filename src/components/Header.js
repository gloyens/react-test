import React from "react";
import Button from "./Button";
import "../index.css";

const Header = ({ showForm, changeTextAndColour }) => {
  return (
    <header className="header">
      <h2 className="app-header">Task Manager App</h2>
      <Button
        onClick={showForm}
        colour={changeTextAndColour ? "red" : "green"}
        text={changeTextAndColour ? "Close" : "Add"}
      />
    </header>
  )
}

export default Header
