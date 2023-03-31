import React, { Fragment, useContext } from "react";
import { CitiesContext} from '../Context/CitiesContext'


const CityListCard = ({ city }) => {

  // let properties = ({city.property.count});
  return (
   
    <div className="city-list-card">
      <img className="city-list-bg" src={city.image_url} alt={city.name} />
      <div className="city-list-details">
        <h3>{city.name} </h3>
        <h5>{city.property_count} properties</h5>
      </div>
    </div>
  );
};

export default CityListCard;
