import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
    return (
      <>
      <div className="section-box">

          <div className="text-container">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Dolorum asperiores odio ut sapiente consectetur! Nobis 
                      accusantium fugiat fuga aspernatur debitis eaque similique natus,
                      enim obcaecati iusto aut. Quas, ea reprehenderit.</p>
          </div>
        </div>
        <Link to={"/"} style={{ color: "black", textAlign: "center" }}>
        {" "}
        <h4><FontAwesomeIcon icon={faChevronLeft}  /> Back to Home</h4>
        </Link>
        </>
     );
};

export default AboutUs;