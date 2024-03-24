import React, { useState } from "react";
import DiffViewer, { DiffMethod } from "react-diff-viewer";
import { Button } from "@mui/material";

import style from './Compare.module.css'

function Compare({ leftText, rightText }) {
  const [diffMethod, setDiffMethod] = useState(DiffMethod.LINES);
  const [showDiff, setShowDiff] = useState(true)
  const [buttonText, setButtonText] = useState('Развернуть текст')

  const handleSetButtonTextClick = () => {
    buttonText === 'Развернуть текст' ? setButtonText('Спрятать текст') : setButtonText('Развернуть текст')
    setShowDiff(!showDiff)
  }

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <Button onClick={() => !setDiffMethod(DiffMethod.WORDS)}>
          По словам
        </Button>
        <Button onClick={() => setDiffMethod(DiffMethod.LINES)}>
          По строкам
        </Button>
        <Button onClick={() => handleSetButtonTextClick()}>
          {buttonText}
        </Button>
      </div>
      <div className={style['compare-container']}>
        <DiffViewer
          oldValue={leftText}
          newValue={rightText}
          splitView={true}
          compareMethod={diffMethod}
          showDiffOnly={showDiff}
        />
      </div>
    </div>
  );
}

export default Compare;
