import React, { Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const HomeDetails = ({ propertyId, propertyDesc }) => {

  return ( 
    <div className="property">
      <p><FontAwesomeIcon icon={faChevronLeft} /> Back to Search</p>
      <div className="home-grid-container">
        <div className="home-grid-item images">
          <div>IMAGES</div>
        </div>
        <div className="home-grid-item details ">
          <div>DETAILS</div>
          <div className="" style={{
            display: 'flex'
          }}>
            <button>Shortlist</button>
            <button>Book a Viewing</button>
          </div>
         </div>
          <div className="home-grid-item desc">
            <p>DESC {propertyDesc}</p>
            <p>{propertyId}</p>
          </div>
          <div className="home-grid-item prices">
            <div>Bedroom Prices</div>
          </div>
          <div className="home-grid-item key-features">
           <div>Key Features</div>
          </div>


      </div>
     
     
 
    </div>
  );
};

export default HomeDetails;