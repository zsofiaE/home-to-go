import React, { Fragment, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import OpenViewingModal from "../Modals/OpenModal";
import Modal from "../Modals/Modal";



const HomeDetails = ({ propertyId, propertyDesc }) => {
  const [openModal, setOpenModal] = useState(false);
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
            <button className="open-modal-btn" onClick={() => setOpenModal
              (true)}>Book  Viewing</button>
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
      {openModal && <Modal closeModal={setOpenModal} />}
     
     
 
    </div>
  );
};

export default HomeDetails;