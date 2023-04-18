import React from 'react'
import FormForModal from './FormForModal';
import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk, faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineAddHomeWork } from 'react-icons/md'


const Modal = ({ closeModal, children, isContact }) => {
  
  return (
    <>
    <div id="myModal" role="dialog" className="modal-background">
      <div className="modal-container">
          
          <div className="modal-header">
          <div>
             {isContact ? <h3>Contact us</h3> :  <h3>Book a viewing</h3>} 
             {isContact ? <p> Feel free to contact us if you have any questions.
Looking forward to hear from you.</p> :  <p>Address street, City, 1234</p>}
              </div>
            <div className='close-btn'>
            { isContact ? <button type="button" datadismiss="modal" onClick={() => closeModal(false)}> <FontAwesomeIcon icon={faEnvelopesBulk} size="2xl" style={{color: "#3f5efb"}} pull="right" className='modal-icons'/></button>
                        :
                          <button type="button" datadismiss="modal" onClick={() => closeModal(false)}>  <MdOutlineAddHomeWork size="70px" style={{color: "#3f5efb"}} pull="right"  /> </button>}
          </div>

          </div>
          <div className="modal-body">
            <FormForModal closeModal={closeModal} isContact={isContact}  />
        
          </div>
  
        </div>
      </div>
   
    </>
  
  )
};

export default Modal;