// import "../styles/customerreviews.css";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function CustomerReviews() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   const reviews = [
//     {
//       name: "Vijay Anand",
//       rating: "★★★★★",
//       review:
//         "The menu looks good at the first glance.. We had a burger and chicken wings... Both were really tasty... The wings in particular was top notch",
//     },
//     {
//       name: "Sarath Raja",
//       rating: "★★★★★",
//       review:
//         "Awesome location ever i visited in tiruppur locality,best place for couples and newly married couples, Fantastic pizza taste and best milk shake i ever had in tiruppur",
//     },
//     {
//       name: "Dhanasekar G",
//       rating: "★★★★☆",
//       review:
//         "Good atmosphere, awesome ambiance, polite service with reasonable prices., we had a nice experience, very good place to spend evening with loved ones, very well maintained. Worth visit.",
//     },
//     {
//       name: "Karishma Devaraj",
//       rating: "★★★★★",
//       review:
//         "Nice atmosphere......loved the food and a good place to dine in especially at eve....polite n well behaved staffs.",
//     },
//     {
//       name: "Fathima K",
//       rating: "★★★★★",
//       review:
//         "The food is very tasty and yummy. The flavors are rich and delicious, and every dish feels fresh and well prepared. I really enjoyed the meal and would love to come back again. 😋🍽️",
//     },
//     {
//       name: "Ketzi Victoria",
//       rating: "★★★★★",
//       review:
//         "Excellent ambience and service was good ,it’s a great place to hangout with friends and family.",
//     },
//   ];

//   return (
//     <section className="customer-reviews" id="reviews">
//       <div className="reviews-header" data-aos="fade-up">
//         <h2>What Our Customers Say</h2>

//         <p className="section-subtitle">
//           Real experiences shared by our valued guests who have enjoyed our food
//           and hospitality.
//         </p>
//       </div>

//       <div className="rating-summary" data-aos="zoom-in" data-aos-delay="200">
//         <h2>4.4 ★</h2>
//         <p>Based on 500+ Happy Customers</p>
//       </div>

//       <div className="reviews-grid">
//         {reviews.map((review, index) => (
//           <div
//             className="review-card"
//             key={index}
//             data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
//             data-aos-delay={index * 100}
//           >
//             <div className="review-rating">{review.rating}</div>

//             <p className="review-text">"{review.review}"</p>

//             <h3>{review.name}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CustomerReviews;

import "../styles/customerreviews.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CustomerReviews() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const reviews = [
    {
      name: "Mageshwaran",
      rating: "★★★★★",
      review:
        "The food was genuinely impressive—well-prepared, flavorful, and worth the visit. The ambience is clean and has a nice vibe that makes you want to stay longer.👍",
    },
    {
      name: "AJ Arun",
      rating: "★★★★★",
      review:
        "They have certain specifc flavours in pizza  which is too good compared to others.",
    },
    {
      name: "Karishma Devaraj",
      rating: "★★★★★",
      review:
        "Nice atmosphere loved the food and a good place to dine in especially at eve.",
    },
    {
      name: "Vijaya Kumar",
      rating: "★★★★★",
      review:
        "This shop boasts a clean and cozy ambiance, perfect for dates and satisfying snack cravings. While the taste is excellent with no compromises.",
    },
    {
      name: "Roobha Sivasamy",
      rating: "★★★★★",
      review:
        "We had a good experience along with kids. They enjoyed the pizza and the nuggets so much that they themselves complimented before we left the place.  Must try place!.",
    },
    {
      name: "Sri Hari",
      rating: "★★★★★",
      review:
        "We already tasted in the palladam road branch food was awesome the same taste is maintaining in the kangayem road branch.",
    },
    {
      name: "Vijay Anand",
      rating: "★★★★★",
      review:
        "The menu looked impressive right from the first glance, with a great variety of options to choose from. We ordered a burger and chicken wings, and both dishes exceeded our expectations. The ambience was pleasant, the service was friendly, and the overall dining experience was excellent. Definitely a place I would recommend to food lovers and would love to visit again.",
    },
    {
      name: "Fathima K",
      rating: "★★★★★",
      review:
        "The food is very tasty and yummy. The flavors are rich and delicious.",
    },
    {
      name: "Dhanasekar G",
      rating: "★★★★☆",
      review:
        "Good atmosphere, awesome ambiance, polite service with reasonable prices.",
    },
    {
      name: "Divi",
      rating: "★★★★☆",
      review:
        "Such an unassuming place this is! It’s located on the terrace top a narrow flight of stairs. The place is filled with plants which  makes the air really cool. ",
    },

    {
      name: "Ketzi Victoria",
      rating: "★★★★★",
      review:
        "Excellent ambience and service was too professional, it’s a great place to hangout.Food here is so good. Celebration decoration is nice and affordable",
    },
    {
      name: "Sarath Raja",
      rating: "★★★★★",
      review:
        "Awesome location ever i visited in tiruppur locality,best place for couples and newly married couples.",
    },

    /* NEW REVIEWS */

    // {
    //   name: "Mageshwaran",
    //   rating: "★★★★★",
    //   review:
    //     "The food was genuinely impressive—well-prepared, flavorful, and worth the visit. The ambience is clean and has a nice vibe that makes you want to stay longer.👍",
    // },
    // {
    //   name: "AJ Arun",
    //   rating: "★★★★★",
    //   review:
    //     "They have certain specifc flavours in pizza  which is too good compared to others.",
    // },
    // {
    //   name: "VijayaKumar",
    //   rating: "★★★★★",
    //   review:
    //     "This shop boasts a clean and cozy ambiance, perfect for dates and satisfying snack cravings. However, the slightly higher food prices may not be justified by the portion sizes. While the taste is excellent with no compromises.",
    // },
    // {
    //   name: "Roobha Sivasamy",
    //   rating: "★★★★★",
    //   review:
    //     "We had a good experience along with kids. They enjoyed the pizza and the nuggets so much that they themselves complimented before we left the place.  Must try place!.",
    // },
    // {
    //   name: "Divi",
    //   rating: "★★★★☆",
    //   review:
    //     "Such an unassuming place this is! It’s located on the terrace atop a narrow flight of stairs. We visited on a hot evening and only one other table was occupied. The place is filled with plants which  makes the air really cool. ",
    // },
    // {
    //   name: "Sri Hari",
    //   rating: "★★★★★",
    //   review:
    //     "We already tasted in the palladam road branch food was awesome the same taste is maintaining in the kangayem road branch.",
    // },
  ];

  const reviewPages = [reviews.slice(0, 6), reviews.slice(6, 12)];

  return (
    <section className="customer-reviews" id="reviews">
      <div className="section-header" data-aos="fade-up">
        <h2>What Our Customers Say</h2>

        <p className="section-subtitle">
          Real experiences shared by our valued guests who have enjoyed our food
          and hospitality.
        </p>
      </div>

      <div className="rating-summary" data-aos="zoom-in" data-aos-delay="200">
        <h2>4.4 ★</h2>
        <p>Based on 500+ Happy Customers</p>
      </div>

      <div className="reviews-slider">
        {reviewPages.map((page, pageIndex) => (
          <div className="reviews-page" key={pageIndex}>
            {page.map((review, index) => (
              <div
                className="review-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="review-rating">{review.rating}</div>

                <p className="review-text">"{review.review}"</p>

                <h3>{review.name}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
