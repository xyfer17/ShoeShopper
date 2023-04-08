import React from "react";
import "../../styles/productcard.css";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const id = "3";
  return (
    <div className="product_item">
      <Link to={`/product/${id}`}>
        <div className="image_wrapper"></div>
        <div className="product_content d-flex align-items-center justify-content-between">
          <div>
            <h4 className="body-2">Nike Air Force</h4>
            <p>Men's Shoe</p>
          </div>
          <p className="body-2">₹ 8888</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
