import "../styles.css";

const Destinations = () => {
    return(
        <div className="destinations">
            <h2> Top Destinations in India... </h2>
            <div className="destination-grid">
                <div className="destination-card">
                    <img src="/images/img1.jpeg" alt="Taj Mahal, Agra" />
                    <p> Taj Mahal, Agra </p>
                </div>

                <div className="destination-card">
                    <img src="/images/img2.jpg" alt="Kerela, Back Waters" />
                    <p> Kerela Back Waters, Kerela </p>
                </div>

                <div className="destination-card">
                    <img src="/images/img3.webp" alt=" Hawa Mahal, Jaipur, Rajasthan" />
                    <p> Hawa Mahal, Jaipur, Rajasthan </p>
                </div>

                <div className="destination-card">
                    <img src="/images/img4.webp" alt="Lakshadweep" />
                    <p> Lakshadweep Beaches, Lakshadweep </p>
                </div>

                <div className="destination-card">
                    <img src="/images/img5.jpg" alt="Amrit Udyan, Rashtrapati Bhawan, Delhi" />
                    <p> Amrit Udyan, Rashtrapati Bhawan, Delhi</p>
                </div>

                <div className="destination-card">
                    <img src="/images/img6.jpg" alt="Shimla" />
                    <p>  Shimla, Himachal Pradesh </p>
                </div>

                <div className="destination-card">
                    <img src="/images/img7.jpeg" alt="Banaras Ghat" />
                    <p> Banaras Ghat, Banaras </p>
                </div>

                <div className="destination-card">
                    <img src="/images/img8.jpg" alt="Red Fort, Delhi" />
                    <p> Red Fort, Delhi </p>
                </div>

                <div className="destination-card">
                    <img src="/images/img9.jpeg" alt="Golden Temple, Amritsar" />
                    <p> Golden Temple, Amritsar, Punjab </p>
                </div>

                <div className="destination-card">
                    <img src="/images/img10.jpg" alt="Tea Garden, Darjeling" />
                    <p> Tea Garden, Darjeling </p>
                </div>
            </div>
        </div>
    );
};

export default Destinations;