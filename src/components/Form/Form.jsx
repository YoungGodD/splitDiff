import React, { useRef } from "react";

import style from './Form.module.css'

function Form({leftText, rightText, setLeftText, setRightText}) {
  const leftTextRef = useRef()
  const rightTextRef = useRef()

  const handleleftTextChange = (e) => {
    setLeftText(leftTextRef.current.value)
  }

  const handleRightTextChange = (e) => {
    setRightText(rightTextRef.current.value)
  }

  const setLeftTextFile = (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target.result)
      setLeftText(text)
    }
    reader.readAsText(e.target.files[0])
  }

  const setRightTextFile = (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target.result)
      setRightText(text)
    }
    reader.readAsText(e.target.files[0])
  }

  return (
    <div className={style.container}>
      <div className={style['text-container']}>
        <h3 className={style.title}>Left text</h3>
        <textarea
          className={style.textarea}
          ref={leftTextRef}
          name="leftCode"
          value={leftText}
          placeholder="Enter text or select a file..."
          onChange={(e) => handleleftTextChange(e)}
          variant="outlined"
        /> 
        <label className={style["input-file"]}>
          <input type="file" onChange={(e) => setLeftTextFile(e)} />
          <span className={style["input-file-btn"]}>Select a file</span>           
        </label>
      </div>
      <div className={style['text-container']}>
        <h3 className={style.title}>Right text</h3>
        <textarea
          className={style.textarea}
          ref={rightTextRef}
          name="rightCode"
          value={rightText}
          placeholder="Enter text or select a file..."
          onChange={(e) => handleRightTextChange(e)}
          variant="outlined"
        />
        <label className={style["input-file"]}>
          <input type="file" onChange={(e) => setRightTextFile(e)} />
          <span className={style["input-file-btn"]}>Select a file</span>           
        </label>
      </div>
    </div>
  );
}

export default Form;
