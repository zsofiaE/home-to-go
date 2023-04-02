import React, { Fragment, useContext } from "react";
import { CitiesContext} from '../Context/CitiesContext'
import { Link } from "react-router-dom";

const CityPropertiesCard = ({ city, key }) => {


console.log("thisCityPropertyId", city)
  return ( 
    <div className="property-list-card">
      <h1>{city.property_type}</h1>
      <h2>{city.furnished}</h2>
      {/*<Link to={"homes/"+ cityProperties._id}>
        <h5>{cityProperties.availability} properties</h5>
  </Link>*/}
    </div>
  );
};

export default CityPropertiesCard;