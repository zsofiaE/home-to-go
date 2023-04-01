import React from "react";
import { Fragment, useContext } from "react";
import { CityPropertiesContext } from "../Context/CityPropertiesContext";
import CityPropertiesCard from "./CityPropertiesCard";

const CityPropertiesList = (cityName, key) => {
  const { cityProperties } = useContext(CityPropertiesContext);

  return (
    <>
      <div className="city-list-container">
 
        {cityProperties.map((cityProperty) => (
          <CityPropertiesCard city={cityProperty} key={cityProperty._id} />
        ))} 
      </div>

    </>
  );
};

export default CityPropertiesList;
