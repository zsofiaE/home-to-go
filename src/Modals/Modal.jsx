import React from 'react'
import FormForModal from './FormForModal';
import './Modal.css'


const Modal = ({ closeModal }) => {
  return (
    <>
    <div className="modal-background">
      <div className="modal-container">
          <div className='close-btn'>
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="modal-title">
            <h4>Book a viewing</h4>
            <p>Address street, City, 1234</p>
          </div>
          <div className="modal-body">
            <FormForModal />
          </div>
          <div className="modal-footer">
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>
   
    </>
  
  )
};

export default Modal;