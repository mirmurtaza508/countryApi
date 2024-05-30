import React, { useContext, useState } from 'react'
import Header from './Components/Header'
import './index.css'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'
const App = () => {
  
  return (
      <ThemeProvider>
    <Header/>
    <Outlet/>
      </ThemeProvider>
  )
}

export default App
