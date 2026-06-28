// import "../styles/productcarousel.css";

// import applejuice from "../assets/applejuice.png";
// import brownie from "../assets/brownie.png";
// import chickenlollipop from "../assets/chickenlollipop.png";
// import chickenpizza from "../assets/chickenpizza.png";
// import coldboost from "../assets/cold boost.png";
// import combo from "../assets/combo.png";
// import expresso from "../assets/expresso.png";
// import pasta from "../assets/pasta.png";
// import kitkat from "../assets/kitkatshake.png";
// import momos from "../assets/momos.png";
// import waffle from "../assets/waffle.png";
// import burger from "../assets/burger.png";
// import fries from "../assets/fries.png";
// import falooda from "../assets/falooda.png";

// function ProductCarousel() {
//   const products = [
//     applejuice,
//     brownie,
//     chickenlollipop,
//     chickenpizza,
//     pasta,
//     coldboost,
//     fries,
//     combo,
//     expresso,
//     kitkat,
//     momos,
//     burger,
//     falooda,
//     waffle,
//   ];

//   return (
//     <section className="carousel-section" id="dishes">
//       <h2 className="carousel-heading">Our Signature Dishes</h2>

//       <div className="carousel-wrapper">
//         <div className="carousel-track">
//           {[...products, ...products].map((image, index) => (
//             <div className="carousel-card" key={index}>
//               <img src={image} alt={`Dish ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProductCarousel;

import "../styles/productcarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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

function ProductCarousel() {
  const product = [
    { name: "Apple Juice", image: applejuice },
    { name: "Brownie with Icecream", image: brownie },
    { name: "Chicken Lollipop", image: chickenlollipop },
    { name: "Chicken Pizza", image: chickenpizza },
    { name: "Red Sauce Pasta", image: pasta },
    { name: "Cold Boost", image: coldboost },
    { name: "Peri Peri Fries", image: fries },
    { name: "Veg Patty Burger", image: combo },
    { name: "Double Espresso", image: expresso },
    { name: "KitKat Shake", image: kitkat },
    { name: "Momos", image: momos },
    { name: "Double Chicken Burger", image: burger },
    { name: "Dry Fruits Falooda", image: falooda },
    { name: "Waffle with Icecream", image: waffle },
  ];

  return (
    <section className="products-section">
      <h2 className="section-title">Our Signature Dishes</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {product.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card">
              <img src={product.image} alt={product.name} />

              <div className="product-overlay">
                <h3>{product.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProductCarousel;
