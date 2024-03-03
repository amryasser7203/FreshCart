import React from "react";
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import Products from "./../Products/Products";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <MainSlider />
      <CategoriesSlider />
      <Products />
      <Helmet>
        <meta charSet="utf-8" />
        <title>FreshCart-Home</title>
        <meta name="keywords" content="FreshCart-App-Ecommerce" />
      </Helmet>
    </>
  );
}
