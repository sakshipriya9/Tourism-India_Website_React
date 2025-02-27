import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel
import { Carousel } from "react-responsive-carousel";

import "../styles.css";

const Home = () => {
    return(
        <div className="home">
        <h2> Welcome to India Tourism </h2>
        {/* <p> Explore the beauty of India's rich heritage and landscapes. </p> */}
        <Carousel autoPlay infiniteLoop showThumbs = {false}>
            <div>
                <img src="/Images/img 8.jpg" alt="Red Fort, Delhi" />
                <p className="legend"> Red Fort, Delhi </p>
            </div>

            <div>
                <img src="/Images/img 3.webp" alt="Jaipur, Rajasthan" />
                <p className="legend"> Jaipur, Rajasthan </p>
            </div>

            <div>
                <img src="/Images/img 4.webp" alt="Lakshadweep" />
                <p className="legend"> Lakshadweep </p>
            </div>

            <div>
                <img src="/Images/img 7.jpeg" alt="Banaras" />
                <p className="legend"> Banaras Ghat </p>
            </div>
        </Carousel>
        </div>
    );
};

export default Home;