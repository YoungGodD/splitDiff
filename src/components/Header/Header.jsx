import React from 'react'

import style from './Header.module.css'

function Header() {
  return (
    <div className={style.header}>
        <a href='/'>SplitDiff</a>
    </div>
  )
}

export default Header;