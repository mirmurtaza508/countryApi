import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountriesShimmer from './CountriesShimmer'

const CountryList = ({query,regionQuery}) => {
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res)=>{
     return res.json();
    }).then((data)=>{
      setCountryData(data)
    })
  }, [])
  return (
    <>
    {
      !countryData.length ? <CountriesShimmer/> : 
    <div className="countries-container">
      {
        countryData.filter((country)=>{return country.region.includes(regionQuery)}).filter((country)=>{return country.name.common.toLowerCase().includes(query.toLowerCase())}).map((country)=>{
        return  <CountryCard key={country.name.common} imgUrl={country.flags.svg} name={country.name.common} population={country.population.toLocaleString("en-In")} region={country.region} capital={country.capital} data={country} />
        })
      }
    </div>
    }
    </>
  )
}

export default CountryList
