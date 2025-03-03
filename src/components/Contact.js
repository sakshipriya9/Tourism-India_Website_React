import "../styles.css";
import RotatingGlobe from "./Globe";

const Contact = () => {
    return(
        <div className="contact-page">
            <h2>🌍 Contact Us </h2>
            <p> Click on a city to see contact details. </p>
            <div className="globe-container">
                <RotatingGlobe />
            </div>
        </div>
    );
};

export default Contact;