import axios from "axios";
import React, { useState } from "react";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";
import { useQuery } from "react-query";
import { baseUrl } from "./../../utils/baseUrl";
import "./Products.css";
import emptyProducts from "../../assets/images/emptyProducts.svg";
import EmptyContent from "../EmptyContent/EmptyContent";
import { Helmet } from "react-helmet";

export default function Products() {
  const [searchValue, setSearchValue] = useState("");

  function getProducts() {
    return axios.get(`${baseUrl}/products`);
  }

  let { data, isLoading } = useQuery("getProducts", getProducts);

  const filteredProducts = data?.data?.data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (isLoading) return <Loading />;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FreshCart-Products</title>
        <meta name="keywords" content="FreshCart-App-Ecommerce-Products" />
      </Helmet>
      <div className="container my-5 py-5">
        <div className="d-flex justify-content-between align-items-center my-3  overflow-hidden">
          <h2 className="h3">Products</h2>
          <div className="search-box">
            <button className="btn-search">
              <i className="fas fa-search" />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => {
              return <Product key={item._id} item={item} />;
            })
          ) : (
            <EmptyContent
              imageSrc={emptyProducts}
              message={"No products found at the moment"}
            />
            // <div className="alert alert-success text-center fs-5">
            //   No products found at the moment
            // </div>
          )}
        </div>
      </div>
    </>
  );
}
