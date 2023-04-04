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

        <div className="form-left">
          <label>Name<br/>
          <input 
            type="text" 
            name="username"
            placeholder="Enter your name" 
            value={inputs.name || ""} 
            onChange={handleChange}
          />
          </label><br/>
          <label>Email<br/>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email address"
              value={inputs.email || ""} 
              onChange={handleChange}
            />
            </label><br/>
            <label>Phone Number<br/>
              <input type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={inputs.phone || ""}
              onChange={handleChange}
              />
            </label><br />
          </div>
          <div className="form-right">
            <label >Message
              <textarea
                  rows={8}
                  placeholder="Enter your message" >
                  {/* value={textarea} 
                  onChange={handleChange} */}
              </textarea>
            </label>
            {/* <input type="submit" /> */}
            <button className="submit-btn">Submit</button>
          </div>
      </form>

    )
  
}

export default FormForModal