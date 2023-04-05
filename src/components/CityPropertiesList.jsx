import React from "react";
import { Fragment, useContext } from "react";
import { PropertiesContext } from "../Context/PropertiesContext";
import CityPropertiesCard from "./CityPropertiesCard";

const CityPropertiesList = () => {
  const { cityProperties } = useContext(PropertiesContext);

  return (
    <div className="city-list-container">
      {cityProperties.map((cityProperty) => (
        console.log(cityProperties),
        <CityPropertiesCard city={cityProperty} key={cityProperty._id} propertyId={cityProperty._id} />
      ))}
    </div>
  );
};

export default CityPropertiesList;
