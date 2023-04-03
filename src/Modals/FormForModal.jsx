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
      
      <form onSubmit={handleSubmit}>
        <div className="form-left">
          <label>Name<br/>
          <input 
            type="text" 
            name="username" 
            value={inputs.name || ""} 
            onChange={handleChange}
          />
          </label><br/>
          <label>Email<br/>
            <input 
              type="email" 
              name="email" 
              value={inputs.email || ""} 
              onChange={handleChange}
            />
            </label><br/>
            <label>Phone Number<br/>
              <input type="text"
              name="phone"
              value={inputs.phone || ""}
              onChange={handleChange}
              />
            </label><br />
          </div>
          <div className="form-right">
            <label>Message
              <textarea></textarea>
            </label>
            {/* <input type="submit" /> */}
          </div>
      </form>

    )
  
}

export default FormForModal