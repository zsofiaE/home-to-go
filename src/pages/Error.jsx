import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
//------------------------------------------------------------------------------------------

const Error = () => {
    return (
        <section className="section">
            <h2 style={{color:"#3f5efb", lineHeight: "50px"}}>oops,  <br />
                sorry this page is not available :(</h2>
                <br/>
                <Link to={"/"} style={{ color: "black", textAlign: "center" }}>
        {" "}
        <h4><FontAwesomeIcon icon={faChevronLeft}  /> Back to Home</h4>
        </Link>
        </section>

    );
};

export default Error;