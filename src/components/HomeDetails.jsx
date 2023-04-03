import React, { Fragment, useContext } from "react";

const HomeDetails = ({ propertyId, property }) => {

  return ( 
    <div className="property">
      <p>{property}</p>
      <h2>{propertyId}</h2>
 
    </div>
  );
};

export default HomeDetails;