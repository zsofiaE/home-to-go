import React from "react";

const HP_Section = () => {
  return (
    // <div className='symbols'>
    //   <span className="material-symbols-outlined"></span>
    // </div>
    <section className="section-container dark">
      <div className="section-left">
        <div className="section-left-icons">
            <img
              src="/real_estate_agent.png"
              alt="Hands holding house"
              width="52px"
            />
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
            <img 
              src="/icon_favorites.png" 
              alt="Favorits" 
              width="52px" />
             <div className="favorites">
                <h3>Your favorite</h3>
                <p>
                  Shortlist your favourite properties and send <br />
                  enquiries in one click.
                </p>
            </div>
          </div>
        
      </div>
      <div className="section-right">
        <img className="img-person" src="/person.png" alt="" />
      </div>
    </section>
  );
};

export default HP_Section;
