import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faHeart  } from '@fortawesome/free-solid-svg-icons';


const Section_Desktop = () => {
  return (
    // <div className='symbols'>
    //   <span className="material-symbols-outlined"></span>
    // </div>
    <section className="section-container dark">
      <div className="section-left">
        <div className="section-left-icons">
            {/* <img
              src="/real-estate-agent.png"
              alt="Hands holding house"
              width="52px"
            /> */}
            <div><FontAwesomeIcon icon={faHandPointRight} size="2xl" className="fa-icons" /></div>
            <div className="real-estate">
              <h3>Best selection</h3>
              <p>
                Best selection of student accommodations.
                <br />
                Never been easier to find a home that's
                <br />
                right for you.
              </p>
          </div>
        </div>
          <div className="section-left-icons">
            {/* <img 
              src="/icon_favorites.png" 
              alt="Favorits" 
              width="52px" /> */}
              <div><FontAwesomeIcon icon={faHeart} size="2xl" className="fa-icons" /></div>
             <div className="favorites">
                <h3>Your favorite</h3>
                <p>
                  Shortlist your favourite properties and send <br />
                  enquiries in one click.
                </p>
            </div>
          </div>

          {/* <div className="section-left-icons">
          <h3><FontAwesomeIcon icon={faHeart} className="fa-brands heart" size="1x"></FontAwesomeIcon>Your favorite</h3>
             <div className="favorites">
              
                <p>
                  Shortlist your favourite properties and send <br />
                  enquiries in one click.
                </p>
            </div>
          </div> */}
        
      </div>
      <div className="section-right">
        {/* <div className="bg-section-right"></div> */}
        <img className="img-person" src="https://images.unsplash.com/photo-1577511425081-0ec68e1bd454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2282&q=80" alt="" />
     {/* https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8U1FHanZhR19GMkl8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60
     https://images.unsplash.com/photo-1524850301259-7729d41d11d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1394&q=80
     https://images.unsplash.com/photo-1516222058090-5e0376837302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80
     https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80 */}
      </div>
    </section>
  );
};

export default Section_Desktop;