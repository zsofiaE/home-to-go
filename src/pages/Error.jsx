import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="section">
            <h2 style={{color:"#3f5efb", lineHeight: "50px"}}>oops,  <br />
                sorry this page is not available :(</h2>
            <Link to='/'><h5 style={{color: "#000000"}}>back home</h5></Link>
        </section>

    );
};

export default Error;