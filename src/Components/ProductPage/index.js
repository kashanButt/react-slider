import React from "react";
import SideBarLeft from "./Components/Sidebar/SideBarLeft";
import ProductContent from "./Components/mainContent";
import SideBarRight from "./Components/Sidebar/sideBarRight";
import "../../Styles/Product.css"

const ProductPage = () => {
  return (
    <div className="productContainerLayout">
      <SideBarLeft />
      <ProductContent />
      <SideBarRight />
    </div>
  );
};

export default ProductPage;
