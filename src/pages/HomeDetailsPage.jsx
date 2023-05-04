import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SinglePropertyContext } from "../Context/SinglePropertyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faHeart} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modals/Modal";
import "../styles/HomeDetails.css"
import{ MdOutlineBed, MdOutlineBathtub } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'
import FormForModal from "../Modals/FormForModal";
//------------------------------------------------------------------------------------------

const HomeDetailsPage = () => {

const { homes_id } = useParams();
const { fetchSingleProperty, singleProperty, isLoading } = useContext(SinglePropertyContext);

useEffect(()=> {
  fetchSingleProperty(homes_id);
}, []);

const [openModal, setOpenModal] = useState(false);
const [openContactModal, setOpenContactModal] = useState(false);
const [isContact, setIsContact] = useState(true);

return (
  <>
   {isLoading ? (
        <h1>Wait a little, we are searching the best option for you!</h1>
      ) : (
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
            <img className="main-image" src={singleProperty.images[0]} alt={singleProperty.address.city}/>
            {/* <div className="property-bg-img"
              style={{ backgroundImage: `url(${cityProps.images[0]})` }}
            ></div> */}

          <div className="small-images-box">
            <img className="small-image" src={singleProperty.images[1]} />
            <img className="small-image" src={singleProperty.images[2]} />
            <img className="small-image" src={singleProperty.images[3]} />

          </div>
        </div>
      </div>

      <div className="home-grid-item grid-details">
        <div className="details">
          <h3>{singleProperty.address.street}, {singleProperty.address.city}, {singleProperty.address.postcode}</h3> 
          <div className="container">
              <div className="grid-items bedroom">
                <p>Bedrooms</p>
                <div className="p-color"><MdOutlineBed size="2rem"/> {singleProperty.bedroom_count}</div>
              </div>
              <div className="grid-items bathroom">
                <p>Bathrooms</p>
                <div className="p-color"> <MdOutlineBathtub size="2rem" /> {singleProperty.bathroom_count}</div>
              </div>
              <div className="grid-items property-type">
                <p>Property Type</p>
                <div className="p-color">{singleProperty.property_type}</div>
              </div>
              <div className="grid-items price">
                <p >Price</p>
                <div className="p-color">  {"\u00A3"}{singleProperty.bedroom_prices.bedroom_one}</div>
              </div>
              <div className="grid-items furnished-type">
                <p>Furnished type</p>
                <div className="p-color">{singleProperty.furnished}</div>
              </div>
              <div className="grid-items availability">
                <p>Available from</p>
                <div className="p-color">{singleProperty.availability}</div>
              </div>
           </div>
         
          </div>

          <div className="buttons" style={{display: "flex"}}>
            <button style={{width: "100%"}}> <FontAwesomeIcon icon={faHeart} /> Shortlist</button>
            <button style={{width: "100%"}}
              type="button" datatoggle="modal"
              datatarget="#myModal"
              className="open-modal-btn"
              onClick={() => setOpenModal(true)}
            >Book Viewing</button>
          </div>
        </div>
      
      <div className="home-grid-item grid-desc">
        <h3 className="home-details-h3">Description</h3>
        <p className="p-desc">{singleProperty.property_description}</p>
      </div>

      <div className="home-grid-item grid-prices">
      <h3 className="home-details-h3">Bedroom Prices</h3>
      <div className="border">
        <div className="pr-grid-item">        
          <h4>Bedroom 1</h4>
          <h4>£{singleProperty.bedroom_prices.bedroom_one} per week</h4>
        </div>

        <div className="pr-grid-item">        
          <h4>Bedroom 2</h4>
          <h4>£{singleProperty.bedroom_prices.bedroom_two} per week</h4>
        </div>

        <div className="pr-grid-item">        
          <h4>Bedroom 3</h4>
          <h4>£{singleProperty.bedroom_prices.bedroom_three} per week</h4>
        </div>

        <div className="pr-grid-item" style={{borderBottom:"none"}}>        
          <h4>Bedroom 4</h4>
          <h4>£{singleProperty.bedroom_prices.bedroom_four} per week</h4>
        </div>
      </div>
      </div>

      <div className="home-grid-item grid-key-features">          
        <h3 className="home-details-h3">Key Features</h3>
        <ul >{singleProperty.key_features.map((keyFeatures, index) => <li   key={index} > <FiArrowRight size="25px" color="#6878ff"/> {keyFeatures} </li>)}
        </ul>
      </div>

    </div>
    
    {openModal && <Modal onClose={() => setOpenModal(false)} closeModal={setOpenModal} openModal={openModal} > <FormForModal isContact={isContact}/> </Modal>}
    </div>)}
  </>
);
}

export default HomeDetailsPage;

