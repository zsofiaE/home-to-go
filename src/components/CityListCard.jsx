import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PropertiesContext } from "../Context/PropertiesContext";

const CityListCard = ({ city, cityName }) => {

  const { setCityId } = useContext(PropertiesContext);
  

  return ( 
    <div className="city-list-card">
      <Link to={"cities/"+ cityName} >
      <img className="city-list-bg" src={city.image_url} alt={city.name} />
      <div className="city-list-details">
        <h3>{city.name}</h3>
        <h5>{city.property_count} properties</h5>
        
      </div>
      </Link>
    </div>
  );
};

export default CityListCard;

//{/*onClick={setCityId(cityId)}*/}