import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1> India Tourism </h1>
            <ul>
                <li> <Link to = "/"> Home </Link> </li>
                <li> <Link to = "/destinations"> Destinations </Link> </li>
                <li> <Link to = "/about"> About </Link> </li>
                <li> <Link to = "/contact"> Contact </Link> </li>
            </ul>
        </nav>
    );
};

export default Navbar;