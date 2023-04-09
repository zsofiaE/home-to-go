import React from "react";
import { Fragment, useContext } from "react";
import { PropertiesContext } from "../Context/PropertiesContext";
import CityPropertiesCard from "./CityPropertiesCard";
/*------------------------------------------------------------------------------------------ */

const CityPropertiesList = () => {

  const { cityProperties } = useContext(PropertiesContext);

  return (
    <>
     <div className="city-list-container">

      {cityProperties.map((property) => (
        <CityPropertiesCard property={property} key={property._id} />
      ))}
       </div>
    </>
  );
};

export default CityPropertiesList;
