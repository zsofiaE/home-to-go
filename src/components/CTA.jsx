import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';


const CTA = () => {
  return (
    <section className='cta-container'>
        <div className='cta-left'>
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our <br/>
            weekly newsletter and stay informed.</p>
            <form>
                <label htmlFor=""></label>
                <input id="cta-input" type="email" placeholder="Your email"/>
            </form>
         </div>
         <div className='cta-right'>
            <h3>Let's Socialize</h3>
            <div className='cta-icons-container'>
                    <p><FontAwesomeIcon icon={faFacebook}  className="fa-brands" size="2x"></FontAwesomeIcon><span>Facebook</span></p>
                    <p><FontAwesomeIcon icon={faTwitter} className="fa-brands" size="2x"></FontAwesomeIcon><span>Twitter</span></p> 
                    <p><FontAwesomeIcon icon={faInstagram} className="fa-brands" size="2x"></FontAwesomeIcon><span>Instagram</span></p>
               
                
                </div>
            </div>
    </section>
  )
}

export default CTA