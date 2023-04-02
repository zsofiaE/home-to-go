import React, { Fragment, useContext } from "react";

const PropertyDetails = ({ propertyId }) => {

  return ( 
    <div className="property">
      <h1>Property Name</h1>
      <h2>{propertyId}</h2>
 
    </div>
  );
};

export default PropertyDetails;