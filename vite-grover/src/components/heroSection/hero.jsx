import {
  strawberry,
  buttonPlay,
  orange,
  shoppingIcon,
  chef1,
  alarmClockIcon,
  arrow,
} from "../../image-paths.js";
import "./hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="more-than-faster">
          <p className="more-than-faster-title">More than Faster</p>
          <img
            className="more-than-faster-image"
            src={strawberry}
            alt="strawberry"
          />
        </div>
        <h1 className="hero-content-title">
          <span>Groceries</span>
          <span>delivered in as</span>
          <div className="content-title-container">
            <span>little as</span>
            <span> 2 hours</span>
          </div>
        </h1>
        <p className="hero-content-description">
          <span>Grocen atssures fresh grocery every morning to your</span>
          <span>family without getting out in this pandemic.</span>
        </p>
        <div className="hero-content-buttons">
          <button>Order Now</button>
          <div className="hero-order-process">
            <img src={buttonPlay} alt="play" />
            <span>Order Process</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-image-card">
          <img className="orange-image" src={orange} alt="oranges" />
          <div className="card-info">
            <div className="card-info-title">
              <p>Fresh Orange</p>
              <div className="rectangle"></div>
            </div>
            <div className="card-info-price">
              <h2>$44.60</h2>
              <p>Free Shipping</p>
            </div>
          </div>
          <img className="shopping-image" src={shoppingIcon} alt="" />
        </div>
        <img
          className="hero-chef-logo"
          src={chef1}
          alt="Chef with vegetables"
        />
        <div className="hero-image-delivary">
          <img src={alarmClockIcon} alt="clock" />
          <div className="delivary-title">
            <h3>Delivary</h3>
            <p>30 Min</p>
          </div>
          <img className="pointer" src={arrow} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
