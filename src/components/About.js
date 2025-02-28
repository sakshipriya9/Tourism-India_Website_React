import "../styles.css";

const About = () => {
  return (
    <div className="about">
      <h2>About India Tourism</h2>
      <p>We aim to showcase the best travel destinations in India.</p>

      {/* Flip Card Section */}
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>40+</h3>
              <p>UNESCO Heritage Sites</p>
            </div>
            <div className="flip-card-back">
              <p>India has over 40 UNESCO World Heritage Sites, including the Taj Mahal and Jaipur's city palace. </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>100+</h3>
              <p>National Parks</p>
            </div>
            <div className="flip-card-back">
              <p>Explore India's incredible biodiversity across more than 100 national parks, like Jim Corbett and Kaziranga.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>7000+</h3>
              <p>Km of Coastline</p>
            </div>
            <div className="flip-card-back">
              <p>India has a vast coastline stretching over 7,000 km, featuring stunning beaches in Goa, Kerala, and Andaman Islands.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
