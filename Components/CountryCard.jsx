import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({imgUrl,name,population,region,capital,data}) => {
  return (
    <Link to={`./${name}`} className="country-card" state={data} >
        <img src={imgUrl} style={{height:"10rem",objectFit:"cover"}} />
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>
          </div>
    </Link>

  )
}

export default CountryCard
