import React from "react";
import { Fragment, useContext } from "react";
import { PropertiesContext } from "../Context/PropertiesContext";
import PropertiesCard from "./PropertiesCard";
import PropertiesCount from "./PropertiesCount";
//------------------------------------------------------------------------------------------ 

const CityPropertiesList = () => {
  
  const { cityProperties } = useContext(PropertiesContext);

  return (
    <>
    <PropertiesCount />
      <div className="city-list-container">
        {cityProperties.map(
          (property) => (
            (<PropertiesCard property={property} key={property._id} />)
          )
        )}
      </div>
    </>
  );
};

export default CityPropertiesList;
