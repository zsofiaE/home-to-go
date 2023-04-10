import React from "react";
import { Fragment, useContext } from "react";
import { PropertiesContext } from "../Context/PropertiesContext";
//------------------------------------------------------------------------------------------ 

const PropertiesCount = () => {

  const { homeDetails } = useContext(PropertiesContext);

  return (
    <>
      <div className="detailedPageTestMimi">
      <h3>{homeDetails.total} homes in {homeDetails.city_name}</h3>   
      </div>
    </>
  );
};

export default PropertiesCount;
