import "../styles/productcarousel.css";

import applejuice from "../assets/applejuice.png";
import brownie from "../assets/brownie.png";
import chickenlollipop from "../assets/chickenlollipop.png";
import chickenpizza from "../assets/chickenpizza.png";
import coldboost from "../assets/cold boost.png";
import combo from "../assets/combo.png";
import expresso from "../assets/expresso.png";
import pasta from "../assets/pasta.png";
import kitkat from "../assets/kitkatshake.png";
import momos from "../assets/momos.png";
import waffle from "../assets/waffle.png";
import burger from "../assets/burger.png";
import fries from "../assets/fries.png";
import falooda from "../assets/falooda.png";
// import product1 from "../assets/img1.png";
// import product2 from "../assets/img2.png";
// import product3 from "../assets/img3.png";
// import product4 from "../assets/img4.jpg";
// import product5 from "../assets/img5.jpg";
// import product6 from "../assets/img6.jpg";
// import product7 from "../assets/img7.jpg";

function ProductCarousel() {
  const products = [
    applejuice,
    brownie,
    chickenlollipop,
    chickenpizza,
    pasta,
    coldboost,
    fries,
    combo,
    expresso,
    kitkat,
    momos,
    burger,
    falooda,
    waffle,
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
