import React from "react";
import "../../styles/productcard.css";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const id = "3";
  return (
    <div className="product_item">
      <Link to={`/product/${id}`}>
        <div className="image_wrapper">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_603,c_limit/68b0ba7b-a352-4ed1-a0e9-2df11a68b693/air-max-sc-se-shoes-mVqXvN.png"
            alt=""
          />
        </div>
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
