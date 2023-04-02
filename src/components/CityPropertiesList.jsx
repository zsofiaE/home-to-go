import React from "react";
import { Fragment, useContext } from "react";
import { CityPropertiesContext } from "../Context/CityPropertiesContext";
import CityPropertiesCard from "./CityPropertiesCard";

const CityPropertiesList = () => {
  const { cityProperties2 } = useContext(CityPropertiesContext);

  return (
    <>
      <div className="city-list-container">
        {cityProperties2.map((cityProperty) => (
          <CityPropertiesCard property={cityProperty} key={cityProperty._id} />
        ))} 
      </div>

    </>
  );
};

export default CityPropertiesList;
