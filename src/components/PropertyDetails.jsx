import React, { Fragment, useContext } from "react";

const PropertyDetails = ({ propertyId, propertyDesc }) => {

  return ( 
    <div className="property">
      <h1>{propertyDesc}</h1>
      <h2>{propertyId}</h2>
 
    </div>
  );
};

export default PropertyDetails;