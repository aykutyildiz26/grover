import {
  mobileMockup,
  iconOfApple,
  iconOfPlaystore,
} from "../../image-paths.js";
import "./cta.css";

function CTA() {
  return (
    <section className="cta-section">
      <img className="cta-image" src={mobileMockup} alt="Iphone Screen" />
      <div className="download-our-app-container">
        <div className="download-our-app-title-container">
          <h3>Download our app</h3>
          <h2>
            <span>Get The Groceries App</span>
            <span>Order More Easily.</span>
          </h2>
        </div>
        <p className="download-our-app-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <div className="download-our-app-button-container">
            <button className="download-our-app-button">
                <img src={iconOfApple} alt="Apple Logo" />
                <span>App Store</span>
            </button>
            <button className="download-our-app-button">
                <img src={iconOfPlaystore} alt="Play Store Logo" />
                <span>Play Store</span>
            </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
