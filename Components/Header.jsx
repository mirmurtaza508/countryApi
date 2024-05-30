import React, { useContext } from 'react'
import { themeContext } from '../contexts/theme'

const Header = () => {
  const [isDark,setIsDark]  = useContext(themeContext)
  function handleClick(){
    setIsDark(!isDark)
    document.body.classList.toggle("dark")

    localStorage.setItem("theme",!isDark)
  }

  return (
    <header className={`header-container ${!isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p onClick={handleClick} style={{fontSize:"1.3rem",cursor:"pointer"}}>
          <i className={`fa-solid fa-${!isDark ? "sun": "moon"}`}></i>&nbsp;&nbsp;{isDark ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </header>
  )
}

export default Header
