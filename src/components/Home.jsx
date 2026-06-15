import HomeSection from "../components/HomeSection";
import Story from "../components/Story";
import "../styles/Home.css";
import CustomerReviews from "../components/customerReview";
import ProductCarousel from "../components/productCarousel";
import ShopLocation from "../components/shoplocation";
import Contact from "./Contact";
import WhatsAppFloat from "./Whatsappfloater";

function Home() {
  return (
    <>
      <div className="home-page">
        <HomeSection />
        <WhatsAppFloat />
        {/* <ProductCarousel />
        <Story />
        <CustomerReviews />
        <ShopLocation />
        <Contact /> */}
      </div>
    </>
  );
}

export default Home;
