import React from 'react'
import FormForModal from './FormForModal';
import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk, faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';


const Modal = ({ closeModal }) => {
  return (
    <>
    <div className="modal-background">
      <div className="modal-container">
          
          <div className="modal-header">
          <div>
              <h3>Book a viewing</h3>
              <p>Address street, City, 1234</p>
              </div>
            <div className='close-btn'>
            {/* <FontAwesomeIcon icon={faEnvelopesBulk} size="2xl" style={{color: "#3f5efb"}} pull="right" className='modal-icons'/> */}
           
            <button onClick={() => closeModal(false)}>  <FontAwesomeIcon icon={faHouseCircleCheck} size="3x" style={{color: "#3f5efb"}} pull="right" className='modal-icon' /> </button>
          </div>

          </div>
          <div className="modal-body">
            <FormForModal />
          </div>
          {/* <div className="modal-footer"></div> */}
        </div>
      </div>
   
    </>
  
  )
};

export default Modal;