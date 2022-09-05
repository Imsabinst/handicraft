import React from "react";
import Announcement from "../../components/announcement";
import Categories from "../../components/categories";
import Navbar from "../../components/navbar";
import Slider from "../../components/slider";
import PopularProducts from "../../components/products";
import Newsletter from "../../components/newsletter";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
