import { useState } from 'react';
import React from 'react'

const FormForModal = ({closeModal}) => {

    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState();

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      

      setInputs(values => ({...values, [name]: value}))
      setTextarea(event.target.value)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert('You have submitted the form.');
    }
  
    return (
      
      <form onSubmit={handleSubmit} className='modal-form-container'>

        <div className="form-left">
          <label>Name<br/>
          <input 
            id="label" 
            type="text" 
            name="name"
            placeholder="Enter your name" 
            value={inputs.name || ""} 
            onChange={handleChange}
          />
          </label><br/>
          <label>Email<br/>
            <input 
              id="label" 
              type="email" 
              name="email" 
              placeholder="Enter your email address"
              value={inputs.email || ""} 
              onChange={handleChange}
            />
            </label><br/>
            <label>Phone Number<br/>
              <input 
              type="text"
              id="label" 
              name="phone"
              placeholder="Enter your phone number"
              value={inputs.phone || ""}
              onChange={handleChange}
              />
            </label><br />
          </div>
          <div className="form-right">
            <label >Message<br/>
              <textarea
                  rows={7}
                  placeholder="Enter your message" 
                  value={textarea} 
                  onChange={handleChange}>
              </textarea>
            </label><br/>
            <button type="submit"  datadismiss="modal" className="submit-btn">Submit</button>
            {/* <button type="submit" onClick={() => closeModal(false)}  datadismiss="modal" className="submit-btn">Submit</button> */}
          </div>
      </form>

    )
  
}

export default FormForModal