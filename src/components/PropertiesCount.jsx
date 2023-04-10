import React from "react";
import { Fragment, useContext } from "react";
import { PropertiesContext } from "../Context/PropertiesContext";
import { useParams } from "react-router-dom";
//------------------------------------------------------------------------------------------ 

const PropertiesCount = ({propsName, propsCount}) => {

  return (
    <>
      <div className="detailedPageTestMimi">
      <h3>{propsCount} homes in </h3>   
      </div>
    </>
  );
};

export default PropertiesCount;
/*{propsName}*/