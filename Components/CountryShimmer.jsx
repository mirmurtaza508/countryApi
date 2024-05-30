import React from 'react'

const CountryShimmer = () => {
  return (
<main>
       <div className="country-details-container">
      <span className="back-button" style={{background:"#ccc"}} onClick={()=>{history.back()}}>
      </span>
      <div className="country-details">
        <span style={{width:"419px",height:"279px",background:"#ccc"}} />
        <div className="details-text-container">
          <h1></h1>
          <div className="details-text">
            <p style={{width:"230px",height:"20px",background:"#ccc"}}><b> </b><span className="native-name"></span></p>
            <p style={{width:"230px",height:"20px",background:"#ccc"}}><b> </b><span className="population"></span></p>
            <p style={{width:"230px",height:"20px",background:"#ccc"}}><b></b><span className="region"></span></p>
            <p style={{width:"230px",height:"20px",background:"#ccc"}}><b> </b><span className="sub-region"></span></p>
            <p style={{width:"230px",height:"20px",background:"#ccc"}}><b></b><span className="capital"></span></p>
            <p style={{width:"230px",height:"20px",background:"#ccc"}}>
              <b></b><span className="top-level-domain"></span>
            </p>
            <p style={{width:"230px",height:"20px",background:"#ccc"}}><b></b><span className="currencies"></span></p>
            <p style={{width:"230px",height:"20px",background:"#ccc"}}><b> </b><span className="languages"></span></p>
          </div>
          <div style={{width:"230px",height:"20px",background:"#ccc"}} className="border-countries"><b> </b>&nbsp;</div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default CountryShimmer
