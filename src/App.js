import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Compare from "./components/Compare/Compare";

function App() {
    const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");

  return (
    <div>
      <Header />
      <Form
        leftText={leftText}
        rightText={rightText}
        setLeftText={setLeftText}
        setRightText={setRightText}
      />
      <Compare 
        leftText={leftText}
        rightText={rightText}
      />
    </div>
  );
}

export default App;
