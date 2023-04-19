import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faHeart} from "@fortawesome/free-solid-svg-icons";
import {RiHomeSmile2Line} from "react-icons/ri"

const Shortlist = () => {
  return (
    <>
    <div className="section-compare-box">

        <div className="text-container">
          <div className="favorite-cards">
            <h1> <FontAwesomeIcon icon={faHeart} className="fa-brands" style={{color: "#6878ff"}}/> Your Favorits</h1>
            {/* <img src="./fav1.jpg" width="350px" ></img> */}
          </div>
                  
                 <ul>
                  <li><RiHomeSmile2Line className="li-icons"/>Liverpool, Albert Cottages, Main Street, LA5 1A</li>
                  <li><RiHomeSmile2Line className="li-icons"/>Liverpool, Penly Court, LS7 2AE</li>
                  <li><RiHomeSmile2Line className="li-icons"/>Liverpool Brook Street, LS5 1AE</li>

                 </ul>
        </div>
      </div>
      <Link to={"/"} style={{ color: "black", textAlign: "center" }}>
      {" "}
      <h4><FontAwesomeIcon icon={faChevronLeft}  /> Back to Home</h4>
      </Link>
      </>
  )
}

export default Shortlist