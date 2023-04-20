import React from "react";
import { Link } from "react-router-dom";
import {RiHomeSmile2Line} from 'react-icons/ri'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faHouse, faLocationDot,} from "@fortawesome/free-solid-svg-icons";
//------------------------------------------------------------------------------------------ 

const PropertiesCard = ({ property }) => {

  return (
    <>
      <div className="property-list-card">
        <div
          className="property-bg-img"
          style={{ backgroundImage: `url(${property.images[0]})` }}
        ></div>
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
                {property.rent}
              </p>
              <p style={{ fontSize: "12px", lineHeight: "12.3px" }}>
                pppw including bills
              </p>
            </div>
            <div className="pr-details">
              <p>
                <FontAwesomeIcon icon={faBed} /> {property.bedroom_count}{" "}
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faBath} /> {property.bathroom_count}
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
              <p>{property.property_type}</p>
              <p>{property.furnished} </p>
            </div>
            <div style={{ alignSelf: "self-start", padding: '0 40px' }}>
              <FontAwesomeIcon icon={faLocationDot} className="fa-icons"style={{ padding: '0 5px' }}/>
              {property.address.street}, {property.address.city}, {property.address.postcode}
            </div>
          </div>
          <Link to={"homes/"+ property._id}>
          <button className="property-view-btn">
            <RiHomeSmile2Line size="30px" className="icon"/> View Home
          </button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default PropertiesCard;
