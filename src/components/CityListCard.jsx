import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PropertiesContext } from "../Context/PropertiesContext";
import "../styles/CityList.css"

const CityListCard = ({ city }) => 
{
  const { setSelectedCity } = useContext(PropertiesContext);

  const descHandler = () => 
  {
    setSelectedCity(city._id);
  }
  
  return ( 
    <>
    <div className="city-list-card" >
      <Link to={"cities/"+ city.name} onClick={(descHandler)} >
      <img className="city-list-bg" src={city.image_url} alt={city.name} />
      <div className="city-list-details">
        <h3>{city.name}</h3>
        <h5>{city.property_count} properties</h5>      
      </div>
      </Link>
    </div>
    </>
  );
};

export default CityListCard;
