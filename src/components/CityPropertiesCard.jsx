import React, { Fragment, useContext } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faHouse,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const CityPropertiesCard = ({ city, propertyId }) => {
  //  console.log( "thisCityPropertyID", city);
  return (
    <div className="property-list-card">
      <div
        className="property-bg-img"
        style={{ backgroundImage: `url(${city.images[0]})` }}
      ></div>
      {/* <img className="propery-img" 
            src={city.images[0]} 
            alt={city.property_type} /> */}
      <div
        className="property-list-details"
        style={{ 
          margin: "0", 
          padding: "0", 
          fontSize: "12px" }}
      >
        <div className="property-price-and-details">
          <div className="pr-price">
            <p
              style={{
                fontSize: "24px",
                fontWeight: "600px",
                lineHeight: "36px",
              }}
            >
              {" "}
              {"\u00A3"}
              {city.rent}
            </p>
            <p style={{ fontSize: "12px", lineHeight: "12.3px" }}>
              pppw including bills
            </p>
          </div>
          <div className="pr-details">
            <p>
              <FontAwesomeIcon icon={faBed} /> {city.bedroom_count}{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faBath} /> {city.bathroom_count}
            </p>
          </div>
        </div>
        <div className="pr-type-address">
          <div
            className="pr-type"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "500px"
            }}
          >
            <p>{city.property_type}</p>
            <p>{city.furnished} </p>
          </div>
          <div style={{ alignSelf: "self-start", padding: '0 40px' }}>
            <FontAwesomeIcon icon={faLocationDot} className="fa-icons"style={{ padding: '0 5px' }}/>
            {city.address.street},{city.address.city},{city.address.postcode}
          </div>
        </div>
        <Link to={"homes/"+ propertyId}>
        <button className="property-view-btn">
          <FontAwesomeIcon icon={faHouse} /> View Home
        </button>
      </Link>
      </div>
    </div>
  );
};

export default CityPropertiesCard;
