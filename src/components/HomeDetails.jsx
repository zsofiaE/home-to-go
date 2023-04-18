import React, { Fragment, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBed, faBath, faHeart} from "@fortawesome/free-solid-svg-icons";
import OpenViewingModal from "../Modals/OpenModal";
import Modal from "../Modals/Modal";
import { Link } from "react-router-dom";
import "../styles/HomeDetails.css"
import{ MdOutlineBed, MdOutlineBathtub } from 'react-icons/md'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const HomeDetails = ({cityProps, id}) => {


  console.log("cityProps",cityProps)

  const [openModal, setOpenModal] = useState(false);

  const listKeyFeatures = cityProps.key_features.map((keyFeatures, index) => <li   key={index} > <FiArrowRight color="#6878ff"/> {keyFeatures} </li>); //When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:
  //const listBedroomPrices = cityProps.bedroom_prices.map((bedroomPrices, index) => <li key={index}> {bedroomPrices}</li>); //When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:
//            

  return (
    <div className="property">
      <Link to={"/"} style={{ color: "black" }}>
        {" "}
        <h4>
          <FontAwesomeIcon icon={faChevronLeft}  /> Back to Search
        </h4>
      </Link>

      <div className="home-grid-container">
        
        <div className="home-grid-item grid-images">
          <div className="images">
              <img className="main-image" src={cityProps.images[0]} alt={cityProps.address.city}/>
              {/* <div className="property-bg-img"
                style={{ backgroundImage: `url(${cityProps.images[0]})` }}
              ></div> */}

            <div className="small-images-box">
              <img className="small-image" src={cityProps.images[1]} />
              <img className="small-image" src={cityProps.images[2]} />
              <img className="small-image" src={cityProps.images[3]} />

            </div>
          </div>
        </div>

        <div className="home-grid-item grid-details">
          <div className="details">
            <h3>{cityProps.address.street}, {cityProps.address.city}, {cityProps.address.postcode}</h3> 
            
            {/* <hr style={{color: "black", height: "0.3px"}}/> */}

            <div className="container">
                <div className="grid-items bedroom">
                  <p>Bedrooms</p>
                  <div className="p-color"><MdOutlineBed size="2rem"/> {cityProps.bedroom_count}</div>
                </div>
                <div className="grid-items bathroom">
                  <p>Bathrooms</p>
                  <div className="p-color"> <MdOutlineBathtub size="2rem" /> {cityProps.bathroom_count}</div>
                </div>
                <div className="grid-items property-type">
                  <p>Property Type</p>
                  <div className="p-color">{cityProps.property_type}</div>
                </div>
                <div className="grid-items price">
                  <p >Price</p>
                  <div className="p-color">  {"\u00A3"}{cityProps.bedroom_prices.bedroom_one}</div>
                </div>
                <div className="grid-items furnished-type">
                  <p>Furnished type</p>
                  <div className="p-color">{cityProps.furnished}</div>
                </div>
                <div className="grid-items availability">
                  <p>Available from</p>
                  <div className="p-color">{cityProps.availability}</div>
                </div>
             </div>
           
            </div>

            <div className="buttons" style={{display: "flex"}}>
              <button style={{width: "100%"}}> <FontAwesomeIcon icon={faHeart} /> Shortlist</button>
              <button style={{width: "100%"}}
                type="button" dataToggle="modal"
                dataTarget="#myModal"
                className="open-modal-btn"
                onClick={() => setOpenModal(true)}
              >Book Viewing</button>
            </div>
          </div>
        
        <div className="home-grid-item grid-desc">
          <h3 className="home-details-h3">Description</h3>
          <p className="p-desc">{cityProps.property_description}</p>
        </div>

        <div className="home-grid-item grid-prices">
        <h3 className="home-details-h3">Bedroom Prices</h3>
        <div className="border">
          <div className="pr-grid-item">        
            <h4>Bedroom 1</h4>
            <h4>£{cityProps.bedroom_prices.bedroom_one} per week</h4>
          </div>

          <div className="pr-grid-item">        
            <h4>Bedroom 2</h4>
            <h4>£{cityProps.bedroom_prices.bedroom_two} per week</h4>
          </div>

          <div className="pr-grid-item">        
            <h4>Bedroom 3</h4>
            <h4>£{cityProps.bedroom_prices.bedroom_three} per week</h4>
          </div>

          <div className="pr-grid-item" style={{borderBottom:"none"}}>        
            <h4>Bedroom 4</h4>
            <h4>£{cityProps.bedroom_prices.bedroom_four} per week</h4>
          </div>
        </div>
        </div>

        <div className="home-grid-item grid-key-features">          
          <h3 className="home-details-h3">Key Features</h3>
          <ul >{listKeyFeatures}</ul>
        </div>

      </div>
      
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default HomeDetails;
