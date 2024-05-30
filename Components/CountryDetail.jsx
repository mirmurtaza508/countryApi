import React, { useContext, useEffect, useState } from 'react'
import './Country.css'
import { useLocation, useOutletContext, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CountryShimmer from './CountryShimmer';
import { themeContext } from '../contexts/theme';

const CountryDetail = () => {
  // const params = new URLSearchParams(document.location.search);
  // const countryName = params.get("name");
  const params = useParams()
  const countryName = params.country
  const {state} = useLocation()
  const [country, setCountry] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [isDark]  = useContext(themeContext)
  function updateCountryData(data){
    setCountry({
      flagUrl: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population.toLocaleString("en-In"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital?.join(", "),
      tld: data.tld,
      currencies: Object.values(data.currencies || {}).map((currency)=> currency.name).join(", "),
      language: Object.values(data.languages || {}).join(", "),
      borders: [],
    })
    if(!data.borders){
      data.borders = []
    }
    Promise.all(
      data.borders.map((border)=>{
        // console.log(border)
       return fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=>{
          return res.json();
        }).then(([borderCountry])=> borderCountry.name.common)
      })
    ).then((borders)=>{
      setTimeout(setCountry((prevState)=> ({...prevState, borders: borders})))
    })
  }

  useEffect(()=>{
    if(state){
      updateCountryData(state)
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>{
      return res.json()
    }).then(([data])=>{
      updateCountryData(data)
      
    }).catch(err=>{
      setNotFound(true)
    })
  },[countryName])
  if(notFound){
    return <div style={{height:"90vh",display:"flex",justifyContent:'center',flexDirection:"column",position:"relative"}}>
      <h1 style={{position:"absolute",top:"10px",color:"white",textAlign:"center",width:"100%"}}>country not found</h1> 
      <img src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-3959253-3299952.gif" style={{height:"100%",objectFit:'cover'}} alt="" />
    </div>
  }
  return (
    <main className={`${isDark ? "": "dark"}`} style={{minHeight: "calc(100vh - 73.777px)",maxHeight:"auto",maxWidth:"auto"}}>
       <div className="country-details-container">
      <span className="back-button" onClick={()=>{history.back()}}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      { country === null ? <CountryShimmer/> :
      <div className="country-details">
        <img src={country.flagUrl} alt="" />
        <div className="details-text-container">
          <h1>{country.name}</h1>
          <div className="details-text">
            <p><b>Native Name: </b><span className="native-name">{country.nativeName || country.name}</span></p>
            <p><b>Population: </b><span className="population">{country.population}</span></p>
            <p><b>Region: </b><span className="region"></span>{country.region}</p>
            <p><b>Sub Region: </b><span className="sub-region">{country.subRegion}</span></p>
            <p><b>Capital: </b><span className="capital"></span>{country.capital}</p>
            <p>
              <b>Top Level Domain: </b><span className="top-level-domain">{country.tld}</span>
            </p>
            <p><b>Currencies: </b><span className="currencies">{country.currencies}</span></p>
            <p><b>Languages: </b><span className="languages">{country.language}</span></p>
            </div>
         {
         country.borders.length !== 0 && <div className="border-countries"><b>Border Countries: </b>&nbsp; 
         {
          country.borders.map((border)=>{
            return <Link to={`/${border}`} key={border}>{border}</Link>
          })
         }
         </div>
         }
</div>
      </div>
}
    </div>
  </main>
  )
}

export default CountryDetail
