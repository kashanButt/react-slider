import React from "react";
import { GoLocation } from "react-icons/go";
import ProductSlider from "./slider";
import InspReport from "./MainContent/InspReport";
import VehicleInfo from "./MainContent/vehicleInfo";


const MainProductContent = () => {
  return (
    <div className="MainProductContent">
      <div className="heading">
        <h2>Nissan Clipper DX 2013</h2>
        <p className="location">
          <GoLocation className="locationIcon" />
          I-10,Islamabad
        </p>
      </div>
      <ProductSlider />
      <VehicleInfo />
      <InspReport />
      <div className="sellerComments">
        <h2>Seller's Comments</h2>
        <p>
          Documents & NOC will be provided at the time of deal
          <br />
          - Pak wheels inspected car
          <br />
          - Inspection report attached
          <br />
          - Original No Plates Available
          <br />
          - 1st owner
          <br />
          - Token Taxes up to date
          <br />
          - Model 2019
          <br />
          - Registered 2019
          <br />- 2 keys available
        </p>
        <p style={{ marginTop: "10px" }}>
          Mention PakWheels.com when calling Seller to get a good deal
        </p>
      </div>
    </div>
  );
};

export default MainProductContent;
