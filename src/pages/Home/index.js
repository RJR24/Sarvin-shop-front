import React from "react";

import Categories from "../../components/Categories/Categories";
import OnSaleProducts from "../../components/OnSaleProducts/DiscountedProducts";
import NewProducts from "../../components/NewProducts/NewProducts";
import BestSellersList from "../../components/Best-seller-products/NewBestSeller.jsx";

import TopBrands from "../../components/TopBrands/TopBrands";
import SmartWatch from "../../components/smartWatchBanner/SmartWatchBanner.jsx";
import NewBlogs from "../../components/OurBlogSection/OurBlog";
import OurServices from "../../components/Services/OurServices";
import Hero from "../../components/HeroSection/Hero";
import HomeBanner from "../../components/homePageBanner/HomeBanner"


const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Categories />
      <OnSaleProducts />
      <NewProducts />
      <HomeBanner />
      <BestSellersList />
      <TopBrands />
      <SmartWatch />
      <NewBlogs />
      <OurServices />
    </div>
  );
};

export default Home;
