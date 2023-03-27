import React from 'react'


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
            <h3>Let’s Socialize</h3>
            <div className='fa-brands-names'>
                <div className="cta-icons">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <div>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>
                </div>
            </div>
    </section>
  )
}

export default CTA