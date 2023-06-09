import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faHeart  } from '@fortawesome/free-solid-svg-icons';
//------------------------------------------------------------------------------------------

const Section_Desktop = () => {
 
  return (
     <section className="section-container dark">
      <div className="section-left">
        <div className="section-left-icons">
            <div><FontAwesomeIcon icon={faHandPointRight} size="3x" className="fa-icons" /></div>
            <div className="real-estate">
              <h3>Best selection</h3>
              <p>
                Best selection of student accommodations.
                Never been easier to find a home that's right for you.
              </p>
          </div>
        </div>
          <div className="section-left-icons">
              <div><FontAwesomeIcon icon={faHeart} size="3x" className="fa-icons" /></div>
              <div className="favorites">
                <h3>Your favorite</h3>
                <p>
                  Shortlist your favourite properties and send 
                  enquiries in one click.
                </p>
            </div>
          </div>
      </div>
      <div className="section-right">
        <img className="img-person" src="https://images.unsplash.com/photo-1524850301259-7729d41d11d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1394&q=80" />
      </div>
    </section>
  );
};

export default Section_Desktop;