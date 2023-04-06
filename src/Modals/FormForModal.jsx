import { useState } from 'react';
import React from 'react'

const FormForModal = () => {

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
      alert(inputs);
    }
  
    return (
      
      <form onSubmit={handleSubmit} className='modal-form-container'>

        {/* <div className="form-left"> */}
          <label className="grid-item-name">Name<br/>
          <input 
            type="text" 
            name="name"
            placeholder="Enter your name" 
            value={inputs.name || ""} 
            onChange={handleChange}
          />
          </label><br/>
          <label className="grid-item-email">Email<br/>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email address"
              value={inputs.email || ""} 
              onChange={handleChange}
            />
            </label><br/>
            <label className="grid-item-phone">Phone Number<br/>
              <input type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={inputs.phone || ""}
              onChange={handleChange}
              />
            </label><br />
          {/* </div> */}
          {/* <div className="form-right"> */}
            <label className="grid-item-msg">Message<br />
              <textarea
                  rows={8}
                  placeholder="Enter your message" >
                  {/* value={textarea} 
                  onChange={handleChange} */}
              </textarea>
            </label><br />
            <button className="submit-btn" type="submit" >Submit</button>
           {/* <input type="submit" /> */}
          {/* </div> */}
         
      </form>

    )
  
}

export default FormForModal