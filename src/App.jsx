import Header from "./Components/Modules/Header/Header";
import Hero from "./Components/Templates/Hero/Hero";
import WhyUs from "./Components/Templates/WhyUs/WhyUs";
import CountUpSection from "./Components/Templates/CounterSection/CounterSection";
import Categories from "./Components/Templates/Categories/Categories";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";
import Products from "./Components/Modules/Products/Products";
import { latestProducts } from "./fakeData";
import SpecialOffers from "./Components/Templates/SpecialOffers/SpecialOffers";
import Articles from "./Components/Templates/Articles/Articles";
import Comments from "./Components/Templates/Comments/Comments";
import Footer from "./Components/Modules/Footer/Footer";
import Gallery from "./Components/Templates/Gallery/Gallery";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <WhyUs />
      <CountUpSection />
      <Products title="latest products" products={latestProducts} />
      <SpecialOffers products={latestProducts} />
      <Products title="best sellers" products={latestProducts} />
      <Articles />
      <Comments />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
