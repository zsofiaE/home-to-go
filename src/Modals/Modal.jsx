import React from 'react'
import FormForModal from './FormForModal';
import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk, faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineAddHomeWork } from 'react-icons/md'


const Modal = ({ closeModal, isContact } ) => {
 
    return (
    <>
                                              {/* //👇with this onClick we allow outside close */}
    <div id="myModal" role="dialog" className="modal-background" onClick={() => closeModal(false)} >
      {/* //here 👆 we allow outside click to close so here 👇 we need to prevent for inside click 
      //if you click inside the content, it will stop at .modal-container and the onClick in .modal-background will never be called. */}
      <div className="modal-container" onClick={e => e.stopPropagation()}>
          
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