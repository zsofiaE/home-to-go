import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';


const CTA = () => {
  return (
    <section className='section-container blue'>
        <div className="keep-in-touch">
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our
            weekly newsletter and stay informed.</p>
            <form>
                {/* <label htmlFor=""></label> */}
                <input id="cta-input" type="email" placeholder="Your email"/>
            </form>
         </div>
         <div className="socialize">
            <h3>Let's Socialize</h3>
            <div className='cta-icons-container'>
                    <p><FontAwesomeIcon icon={faFacebook}  className="fa-brands" size="xl" /> Facebook </p>
                    <p><FontAwesomeIcon icon={faTwitter} className="fa-brands" size="xl" /> Twitter</p> 
                    <p><FontAwesomeIcon icon={faInstagram} className="fa-brands" size="xl" /> Instagram</p>                          
                </div>
            </div>
    </section>
  )
}

export default CTA