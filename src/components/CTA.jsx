import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
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
                <div className="fa-icons">
                    <FontAwesomeIcon icon={faFacebook}  classname="fa-brands" size="2x"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} classname="fa-brands" size="2x"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram} classname="fa-brands" size="2x"></FontAwesomeIcon>
                </div>
                <div className='fa-names'>
                <FontAwesomeIcon icon={faFacebook}  classname="fa-brands" size="2x"></FontAwesomeIcon> 
                 <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                </div>
            </div>
    </section>
  )
}

export default CTA