import React from "react";
import { Fragment, useContext } from "react";
import { PropertiesContext } from "../Context/PropertiesContext";
import CityPropertiesCard from "./CityPropertiesCard";


const CityPropertiesList = () => {

  const { cityProperties } = useContext(PropertiesContext);

  return (
    <>
    <div className="city-list-container">
    {cityProperties.map((property) => (  
      console.log("propertyID", property[0]._id)  ,
       <CityPropertiesCard city={property} key={property[0]._id} />
    ))}
    </div>
    </>
  );
};

export default CityPropertiesList;


