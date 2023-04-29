import React from "react";
import "../../styles/itemview.css";

const ItemView = ({ img, title }) => {
  return (
    <div className="img_wrap">
      <div className="img_head">
        <img src={img} alt="" />
      </div>
      <div className="text-on-img">
        <button>{title}</button>
      </div>
    </div>
  );
};

export default ItemView;
