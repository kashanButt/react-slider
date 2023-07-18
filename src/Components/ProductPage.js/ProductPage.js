import React from "react";
import SideBarLeft from "./SideBarLeft";
import MainProductContent from "./MainProductContent";
import SideBarRight from "./SideBarRight";
import "../../Styles/Product.css"


const ProductPage = () => {
  return (
    <div className="productContainerLayout">
      <SideBarLeft />
      <MainProductContent />
      <SideBarRight />
    </div>
  );
};

export default ProductPage;
