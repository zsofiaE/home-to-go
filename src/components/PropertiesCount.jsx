import React from "react";
import { Fragment, useContext } from "react";
import { FilteredPropertiesContext } from "../Context/FilteredPropertiesContext";
//------------------------------------------------------------------------------------------ 

const PropertiesCount = () => {

  const { filteredHomes, homes } = useContext(FilteredPropertiesContext);
//console.log("homes", homes);

  return (
    <>
      <div className="detailedPageTestMimi">
      <h3>{filteredHomes.length} homes in </h3>   
      </div>
    </>
  );
};

export default PropertiesCount;
//{filteredHomes.length} homes in {filteredHomes.address.city}