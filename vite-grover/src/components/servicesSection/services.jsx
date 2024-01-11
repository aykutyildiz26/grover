import {
  iconOfTruck,
  iconOfGainMoney,
  iconOfSecureMessage,
  redRectangleBackground,
} from "../../image-paths.js";
import "./services.css";

function Services() {
  return (
    <section className="services-section">
      <div className="services-wrapper">
        <div className="services-title-container">
          <h5>What we Serve</h5>
          <h2>
            <span>Fruit And Vegetable Delivered</span>
            <span>To Your Home</span>
          </h2>
        </div>
        <div className="services-card-container">
          <div className="services-card">
            <img
              className="services-card-image"
              src={iconOfTruck}
              alt="Truck"
            />
            <h3 className="services-card-title">Free shipping</h3>
            <p className="services-card-description">
              <span>Enjoy Order in a hand using the</span>
              <span>fresness of groceries</span>
            </p>
          </div>
          <div className="services-card">
            <img
              className="services-card-image"
              src={iconOfGainMoney}
              alt="Hand & Money"
            />
            <h3 className="services-card-title">15 days returns</h3>
            <p className="services-card-description">
              <span>Order in a handy way using the</span>
              <span>freshness of the groceries.</span>
            </p>
          </div>
          <img
            className="services-card-back-images"
            src={redRectangleBackground}
            alt=""
          />
          <div className="services-card">
            <img
              className="services-card-image"
              src={iconOfSecureMessage}
              alt="Secured Message"
            />
            <h3 className="services-card-title">Secure checkout</h3>
            <p className="services-card-description">
              <span>If you get rotten items - return</span>
              <span>immediately to us.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
