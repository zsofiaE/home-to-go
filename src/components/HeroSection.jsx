import React from 'react'

const HeroSection = () => {
  return (
    // <section className="hero-section">
    //       <div class="hero-bg-image"></div>
    //       <div className="hero-text-box">
    //           <h1 className='hero-title'>Find student homes <br/> 
    //               with bills included</h1>
    //           <h4>A simple and faster way to search for student accommodation </h4>
    //       </div>
    // </section>
    <section className="hero-section">
      <div class="bg-image">
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