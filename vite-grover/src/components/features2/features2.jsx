import { chef2, courrier, halfEllipse } from "../../image-paths.js";
import "./features2.css";

function Features2() {
  return (
    <section className="feature-section-2">
      <div className="home-delivery-container">
        <div className="home-delivery-title-container">
          <h3>HOME DELIVERY</h3>
          <h2>
            <span>Sit At Home We Will Take</span>
            <span>Care Your Order</span>
          </h2>
        </div>
        <p className="home-delivery-description">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
        </p>
        <button>Explore Now</button>
      </div>
      <div className="feature-chef-container">
        <img className="feature-chef-image" src={chef2} alt="A chef smiling." />
        <div className="feature-chef-card">
          <img
            className="feature-chef-card-image"
            src={courrier}
            alt="Courrier with bike"
          />
          <h3>Bike Delivery</h3>
          <p>Bicycle service ensures that your packages arrive quickly</p>
        </div>
        <img
          className="half-ellipse"
          src={halfEllipse}
          alt="A rolling half ellipse"
        />
      </div>
    </section>
  );
}

export default Features2;
