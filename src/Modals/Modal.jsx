import React from 'react'
import FormForModal from './FormForModal';
import './Modal.css'


const Modal = (props) => {
  if (!props.openModal) {
    return null
  }

  return (
    <>
    <div className="modal-background" onClick={props.onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
          <div className='close-btn'>
            {/* <button onClick={() => setOpenModal(false)}> X </button> */}
            <button onClick={props.onClose}> X </button>
          </div>
          <div className="modal-title"> {props.title}
            {/* <h3>Book a viewing</h3>
            <p>Address street, City, 1234</p> */}
          </div>
          <div className="modal-body">
            {/* <FormForModal /> */}{props.children}
          </div>
          {/* <div className="modal-footer">
            
          </div> */}
        </div>
      </div>
   
    </>
  
  )
};

export default Modal;