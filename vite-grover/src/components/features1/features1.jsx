import { featuresImage, strawberry2, iconOfStar } from "../../image-paths.js";
import "./features1.css";

function Features1() {
  return (
    <section className="feature-section-1">
      <div className="feature-woman-container">
        <img
          className="feature-woman-image"
          src={featuresImage}
          alt="A woman with oranges on her eyes"
        />
        <div className="feature-woman-card">
          <div className="feature-woman-title">
            <h3>Melting Cheese</h3>
            <span>Red Stovery</span>
          </div>
          <img
            className="feature-woman-card-image"
            src={strawberry2}
            alt="Strawberry"
          />
          <div className="feature-woman-card-bottom">
            <div className="feature-woman-stats">
              <div className="feature-woman-point">
                <img src={iconOfStar} alt="Star" />
                <span>3.8</span>
              </div>
              <span className="feature-woman-price">$49.66</span>
            </div>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="why-choose-us-container">
        <div className="why-choose-us-title-container">
          <h3>WHY CHOOSE US</h3>
          <h2>
            <span>Find Favorites And</span>
            <span>Discovore New Ones</span>
          </h2>
        </div>
        <p className="why-choose-us-description">
          At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis
          praesen voluptatum deleniti.
        </p>
        <button>Explore Now</button>
      </div>
    </section>
  );
}

export default Features1;
