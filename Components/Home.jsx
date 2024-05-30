import React, {useState } from 'react'
import '../index.css'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountryList from './CountryList'
// import { useOutletContext } from 'react-router-dom'
// import { themeContext } from '../contexts/theme'
import { useTheme } from '../hooks/theme'
const App = () => {
  const [query, setQuery] = useState("")
  const [region, setRegion] = useState("")
  const [isDark]  = useTheme()
  return (
    <>
      <div>
    <main className={`${isDark ? "" : "dark"} sizing`} >
      <div className="search-filter-container">
    <SearchBar setQuery={setQuery}/>
    <SelectMenu setRegion={setRegion}/>
    </div>
    <CountryList regionQuery={region} query={query}/>
    </main>
      </div>
    </>
  )
}

export default App
