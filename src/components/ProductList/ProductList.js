import "./ProductList.scss";
import Product from "../Product/Product";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      navigate(`/search/${trimmedTerm}`);
    }
  };
  return (
    <>
      <div className="navbar-collapse w-100">
        <div className="navbar-search bg-white">
          <form className="flex align-center" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="form-control "
              placeholder="Search your preferred items here"
              onChange={(e) => handleSearchTerm(e)}
              required
            />
            <button
              type="submit"
              className="text-white search-btn flex align-center justify-center"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="product-lists grid bg-whitesmoke my-5">
        {products.map((product) => {
          let discountedPrice =
            product.price - product.price * (product.discountPercentage / 100);

          return (
            <Product
              key={product.id}
              product={{ ...product, discountedPrice }}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
