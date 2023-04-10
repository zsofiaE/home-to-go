import React, { Fragment, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import OpenViewingModal from "../Modals/OpenModal";
import Modal from "../Modals/Modal";
import { Link } from "react-router-dom";
import { PropertiesContext } from "../Context/PropertiesContext";
//---------------------------------------------------------------------------------

const HomeDetails = ({cityProps, id}) => {

  const [openModal, setOpenModal] = useState(false);

  const listKeyFeatures = cityProps.key_features.map((keyFeatures, index) => <li key={index}> {keyFeatures}</li>); //When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:
  //const listBedroomPrices = cityProps.bedroom_prices.map((bedroomPrices, index) => <li key={index}> {bedroomPrices}</li>); //When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:
  




  
//            

  return (
    <div className="property">
      <Link to={"/"} style={{ color: "black" }}>
        {" "}
        <h4>
          <FontAwesomeIcon icon={faChevronLeft} /> Back to Search
        </h4>
      </Link>


      <div className="home-grid-container">
        <div className="home-grid-item images">
          <div className="property-bg-img"
            style={{ backgroundImage: `url(${cityProps.images[0]})` }}
          ></div>
        </div>


        <div className="home-grid-item details ">
          <div>DETAILS</div>
          <h2>{cityProps.address.street},</h2> 
          <h2>{cityProps.address.city_name}</h2>

          <div
            className=""
            style={{
              display: "flex",
            }}
          >
            <button>Shortlist</button>
            <button
              className="open-modal-btn"
              onClick={() => setOpenModal(true)}
            >
              Book Viewing
            </button>
          </div>
        </div>
        

        <div className="home-grid-item desc">
          <h2>Description</h2>
          <p>{cityProps.property_description}</p>
        </div>


        <div className="home-grid-item prices">
        <h2>Bedroom Prices</h2>
          <div>        
          <h4>Bedroom 1</h4>
          <h4>£{cityProps.bedroom_prices.bedroom_one} per week</h4>
          </div>

          <div>        
          <h4>Bedroom 2</h4>
          <h4>£{cityProps.bedroom_prices.bedroom_two} per week</h4>
          </div>

          <div>        
          <h4>Bedroom 3</h4>
          <h4>£{cityProps.bedroom_prices.bedroom_three} per week</h4>
          </div>

          <div>        
          <h4>Bedroom 4</h4>
          <h4>£{cityProps.bedroom_prices.bedroom_four} per week</h4>
          </div>
        </div>


        <div className="home-grid-item key-features">          
          <h2>Key Features</h2>
          <ul>{listKeyFeatures}</ul>
        </div>


      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default HomeDetails;
