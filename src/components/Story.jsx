import "../styles/story.css";
// import storyImage from "../assets/storyImage.png";
// import CafeImg from "../assets/real cafe img.jpeg";
// import CafeImage from "../assets/realcafeimage.jpeg";
import CafeStoryyImage from "../assets/real cafe img (1).jpeg";

function Story() {
  return (
    <section className="story-page" id="about">
      <div className="story-hero">
        <div className="story-overlay"></div>
        {/* <img src={storyImage} alt="Our Story" className="story-hero-image" /> */}
        <div className="story-hero-content">
          {/* <h1 className="story-name">Our Story</h1>
          <p className="story-tagline">Every Bite Has a Beginning</p> */}
        </div>
      </div>

      <div className="story-container">
        <div className="story-image-side">
          <img
            // src={storyImage}
            src={CafeStoryyImage}
            alt="Cooking with passion"
            className="side-story-img"
          />
        </div>

        <div className="story-content-side">
          {/* <span className="story-label">SINCE 2020</span> */}
          <h2 className="story-header">Before the Trends, There Was Us: Tiruppur’s First Real Cafe Story</h2>
          <div className="timeline-container">
            <div className="timeline-card">
              <h3>2019</h3>
              <p>
                Launched Tiruppur's 1st Rooftop Garden Cafe & introduced fresh
                dough pizza.
              </p>
            </div>

            <div className="timeline-card">
              <h3>2020</h3>
              <p>
                Partnered with delivery platforms and crossed 6,000+ online
                orders.
              </p>
            </div>

            <div className="timeline-card">
              <h3>2021</h3>
              <p>Renovated the cafe with a fresh theme and menu.</p>
            </div>

            <div className="timeline-card">
              <h3>2022</h3>
              <p>
                Reached 10,000+ online orders and welcomed 9,000+ dine-in
                guests.
              </p>
            </div>

            <div className="timeline-card">
              <h3>2023</h3>
              <p>Opened a cozy 20-seat AC dine-in location.</p>
            </div>

            <div className="timeline-card">
              <h3>2024</h3>
              <p>
                Hosted 12,000+ dine-in guests and expanded celebration spaces.
              </p>
            </div>

            <div className="timeline-card">
              <h3>2025</h3>
              <p>Opened our first franchise branch on Kangeyam Road.</p>
            </div>

            <div className="timeline-card">
              <h3>2026</h3>
              <p>
                Introduced premium coffee culture and achieved record beverage
                sales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="story-values-container">
        <div className="story-values">
          <div className="value-card">
            <h3>Fresh Ingredients</h3>
            <p>
              Carefully sourced ingredients that guarantee freshness and flavor.
            </p>
          </div>

          <div className="value-card">
            <h3>Handcrafted Recipes</h3>
            <p>Traditional methods combined with modern culinary creativity.</p>
          </div>

          <div className="value-card">
            <h3>Community First</h3>
            <p>Creating a place where everyone feels welcome and valued.</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Story;
