import React from "react";
import { Fragment, useContext } from "react";
//import { PropertiesContext } from "../Context/PropertiesContext";
import PropertiesCard from "./PropertiesCard";
import PropertiesCount from "./PropertiesCount";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";

//------------------------------------------------------------------------------------------ 

const CityPropertiesList = () => {
  
  //const { cityProperties } = useContext(PropertiesContext);
  const { filteredHomes } = useContext(FilteredPropertiesContext);
console.log
  return (
    <>
    <PropertiesCount />
      <div className="city-list-container properties-container">
        {filteredHomes.map(
          (property) => (
            (<PropertiesCard property={property} key={property._id} />)
          )
        )}
      </div>
    </>
  );
};

export default CityPropertiesList;
