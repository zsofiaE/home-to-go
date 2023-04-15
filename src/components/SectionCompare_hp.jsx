import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope, faListCheck, faReceipt, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SectionCompare_hp = () => {
  return (
    <div className="section-compare-box">
        <h3>Compare all inclusive student homes.</h3>

        <div className='compare section-flex-container'>
            <div className="flex-item-column">
                <div><FontAwesomeIcon icon={faEarthEurope} className='fa-icons' size="5x" /></div>
                <h3 style={{fontSize: "28px", margin: "5px"}}>Search</h3>
                <p>Find your dream home in the perfect area near your university.</p>
            </div>
            {/* trying to stack two icons, but i can not chnage the position of the one in the front. */}
                {/* <span class="fa-stack fa-5x">
                    <i>< FontAwesomeIcon icon={faEarthEurope} class="fa-stack-2x"  /></i>
                    <i><FontAwesomeIcon icon={faMagnifyingGlass} class="fa-stack-1x" data-fa-transform="shrink-4" style={{color:"tomato"}} /></i>
                </span> */}
                {/* <div  >
                    <i>< FontAwesomeIcon icon={faEarthEurope} size="5x" /></i>
                   <i><FontAwesomeIcon icon={faMagnifyingGlass} size="3x" data-fa-transform="right-4 down-3" style={{color:"tomato"}}  /></i>
                </div> */}

            <div className="flex-item-column">
                <div><FontAwesomeIcon icon={faListCheck} className='fa-icons' size="5x" /></div>
                <h3 style={{fontSize: "28px", margin: "5px"}}>Compare</h3>
                <p>Compare student accommodation to find the right home for you.</p>
            </div>

            <div className="flex-item-column">
                <div><FontAwesomeIcon icon={faReceipt} className='fa-icons' size="5x" /></div>
                <h3 style={{fontSize: "28px", margin: "5px"}}>Bills Included</h3>
                <p>Bills are included in all rent prices. No hidden fees.</p>
            </div>

        </div>
    </div>
  )
}

export default SectionCompare_hp