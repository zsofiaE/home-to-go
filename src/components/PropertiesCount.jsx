import React from "react";
import { Fragment, useContext } from "react";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";
//------------------------------------------------------------------------------------------ 

const PropertiesCount = ({ name }) => {

  const { filteredHomes } = useContext(FilteredPropertiesContext);

  return (
    <>
      <div className="detailedPageTestMimi">
      <h3>{filteredHomes.length} homes in {name}</h3>   
      </div>
    </>
  );
};

export default PropertiesCount;
