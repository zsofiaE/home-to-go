import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";
import "../styles/CityList.css"

const CityListCard = ({ city }) => {
  
  const { setSelectedCity } = useContext(FilteredPropertiesContext);
  
  console.log(city._id);

  const descHandler = () => 
  {
    setSelectedCity(city._id);
  }
  
  return ( 
    <>
    <div className="city-list-card" >
      <Link to={"cities/"+ city._id} onClick={(descHandler)} >
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
