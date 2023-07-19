import React from "react";
import ProductSlider from "./slider";
import InspReport from "./MainContent/InspReport";
import VehicleInfo from "./MainContent/vehicleInfo";
import SellerComment from "./MainContent/SellerComment";
import Heading from "./MainContent/Heading";

const MainProductContent = () => {
  return (
    <div className="MainProductContent" id="MainProductContent">
      <Heading/>
      <ProductSlider />
      <VehicleInfo />
      <InspReport />
      <SellerComment />
    </div>
  );
};

export default MainProductContent;
