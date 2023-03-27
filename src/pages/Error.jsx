import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="section">
            <h2>404 page not found</h2>
            <Link to='/'>back home</Link>
        </section>

    );
};

export default Error;