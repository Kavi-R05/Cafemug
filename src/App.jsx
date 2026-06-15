import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import CustomerReviews from "./components/customerReview";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductCarousel from "./components/productCarousel";
import ShopLocation from "./components/shoplocation";
import Story from "./components/Story";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <ProductCarousel />
      <Story />
      <CustomerReviews />
      <ShopLocation />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
