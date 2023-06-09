import React from 'react'

const HeroSection = () => {
  return (
    // <section className="hero-section">
    //       <div className="hero-bg-image">
     //           <div className="bg-overlay"></div>
       //       </div>
    //       <div className="hero-text-box">
    //           <h1 className='hero-title'>Find student homes <br/> 
    //               with bills included</h1>
    //           <h4>A simple and faster way to search for student accommodation </h4>
    //       </div>
    // </section>
    <section className="hero-section">
      <div className="bg-image">
        <div className='img-overlay'>
          <div className="hero-text-box">
              <h1 className='hero-title'>Find student homes <br/> 
                  with bills included</h1>
              <h4>A simple and faster way to search for student accommodation </h4>
            </div>
        </div>
      </div>
</section>
  )
}

export default HeroSection;