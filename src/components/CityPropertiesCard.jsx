import React, { Fragment, useContext } from "react";
//import { CitiesContext} from '../Context/CitiesContext'
import { Link } from "react-router-dom";

const CityPropertiesCard = ({ property, key }) => {

  console.log(key, "cityKey");
  return ( 
    <div className="property-list-card">
      <h1>{property.property_type}</h1>
      <h2>{property.furnished}</h2>
      <Link to={"homes/"+ key}>
        <h5>availability {property.availability} </h5>
      </Link>
    </div>
  );
};

export default CityPropertiesCard;