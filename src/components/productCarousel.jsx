import "../styles/productcarousel.css";

import product1 from "../assets/img1.png";
import product2 from "../assets/img2.png";
import product3 from "../assets/img3.png";
import product4 from "../assets/img4.jpg";
import product5 from "../assets/img5.jpg";
import product6 from "../assets/img6.jpg";
import product7 from "../assets/img7.jpg";

function ProductCarousel() {
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
  ];

  return (
    <section className="carousel-section" id="dishes">
      <h2 className="carousel-heading">Our Signature Dishes</h2>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[...products, ...products].map((image, index) => (
            <div className="carousel-card" key={index}>
              <img src={image} alt={`Dish ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;
