import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faHeart, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {RiHomeSmile2Line} from "react-icons/ri"

const Shortlist = () => {
  return (
    <>
    <div className="section-box">

        <div className="text-container">
        
            <h1> <FontAwesomeIcon icon={faHeart} className="fa-brands" style={{color: "#6878ff"}}/> Your Favorits</h1>
        
                   {/*
                 <ul>
                  <li><RiHomeSmile2Line className="li-icons"/>Liverpool, Albert Cottages, Main Street, LA5 1A</li>
                  <li><RiHomeSmile2Line className="li-icons"/>Liverpool, Penly Court, LS7 2AE</li>
                  <li><RiHomeSmile2Line className="li-icons"/>Liverpool Brook Street, LS5 1AE</li>
                 </ul>*/}
        </div> 
        <div className="fav">
          <img className="fav-img" src="../public/fav1.jpg" />
          <div
          className="property-list-details"
          style={{ 
            margin: "0", 
            padding: "0", 
            fontSize: "12px" }}>
    
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
              <p>Deteched</p>
              <p>Furnished </p>
              </div>
            <div style={{ alignSelf: "self-start", padding: '0 40px' }}>
              <FontAwesomeIcon icon={faLocationDot} className="fa-icons"style={{ padding: '0 5px' }}/>
              {/* {property.address.street}, {property.address.city}, {property.address.postcode} */}
              Albert Cottages, LA5 1A
            </div>
          </div>
          {/* <Link to={"homes/"+ property._id}> */}
          <button className="property-view-btn favorites">
            <RiHomeSmile2Line size="30px" className="icon"/> View Home
          </button>
        {/* </Link> */}
          </div>
        </div>
      </div>

      <Link to={"/"} style={{ color: "black", textAlign: "center" }}>
      {" "}
      <h4><FontAwesomeIcon icon={faChevronLeft}  /> Back to Home</h4>
      </Link>
      </>
  )
}

export default Shortlist