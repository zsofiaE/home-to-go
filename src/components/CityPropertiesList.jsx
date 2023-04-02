import React from "react";
import { Fragment, useContext } from "react";
import { CityPropertiesContext } from "../Context/CityPropertiesContext";
import CityPropertiesCard from "./CityPropertiesCard";

const CityPropertiesList = () => {
  const { cityProperties } = useContext(CityPropertiesContext);

  return (
    <div className="city-list-container">
      {cityProperties.map((cityProperty) => (
        <CityPropertiesCard city={cityProperty} key={cityProperty._id} propertyId={cityProperty._id} />
      ))}
    </div>
  );
};

export default CityPropertiesList;
