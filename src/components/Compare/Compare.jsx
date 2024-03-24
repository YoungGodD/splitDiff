import React, { useState } from "react";
import DiffViewer, { DiffMethod } from "react-diff-viewer";
import { Button } from "@mui/material";

import style from './Compare.module.css'

function Compare({ leftText, rightText }) {
  const [diffMethod, setDiffMethod] = useState(DiffMethod.LINES);
  const [showDiff, setShowDiff] = useState(true)
  const [buttonText, setButtonText] = useState('show text')

  const handleSetButtonTextClick = () => {
    buttonText === 'show text' ? setButtonText('hide text') : setButtonText('show text')
    setShowDiff(!showDiff)
  }

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <Button onClick={() => setDiffMethod(DiffMethod.LINES)}>
          <span>by lines</span>
        </Button>
        <Button onClick={() => !setDiffMethod(DiffMethod.WORDS)}>
          <span>by words</span>
        </Button>
        <Button onClick={() => handleSetButtonTextClick()}>
          <span>{buttonText}</span>
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
