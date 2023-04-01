import React, { Fragment, useContext } from "react";
import { CitiesContext} from '../Context/CitiesContext'
import { Link } from "react-router-dom";

const CityPropertiesCard = ({ city }) => {
console.log("thisCityId", city._id)
  return ( 
    <div className="city-list-card">
      <Link to={"cities/"+ city._id}>
      <img className="city-list-bg" src={city.image_url} alt={city.name} />
      <div className="city-list-details">
        <h3>{city.name}</h3>
        <h5>{city.property_count} properties</h5>
      </div>
      </Link>
    </div>
  );
};

export default CityPropertiesCard;