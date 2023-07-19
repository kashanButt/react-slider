import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const SideBarLeft = () => {
  const [carInfo, setCarInfo] = useState(true);
  const [carDetails, setCarDetails] = useState(false);
  const [inspReport, setInspReport] = useState(false);
  const [sellComment, setSellComment] = useState(false);
  const [simAds, setSimAds] = useState(false);

  return (
    <div className="SideBarLeft">
      <div className="options">
        <ul>
          <li
            className={`${carInfo ? "option-active" : ""}`}
            onClick={() => setCarInfo((active) => !active)}
          >
            <a href="#MainProductContent">
              <BiSolidRightArrow className="icon" /> Car Info
            </a>
          </li>
          <li
            className={`${carDetails ? "option-active" : ""}`}
            onClick={() => setCarDetails((active) => !active)}
          >
            <a href="#vehicleInfo">
              <BiSolidRightArrow className="icon" /> Car Details
            </a>
          </li>
          <li
            className={`${inspReport ? "option-active" : ""}`}
            onClick={() => setInspReport((active) => !active)}
          >
            <a href="#inspReport">
              <BiSolidRightArrow className="icon" /> Inspection Report
            </a>
          </li>
          <li
            className={`${sellComment ? "option-active" : ""}`}
            onClick={() => setSellComment((active) => !active)}
          >
            <a href="#sellerComments">
              <BiSolidRightArrow className="icon" /> Seller's Comments
            </a>
          </li>
          <li
            className={`${simAds ? "option-active" : ""}`}
            onClick={() => setSimAds((active) => !active)}
          >
            <a href="#">
              <BiSolidRightArrow className="icon" /> Similar Ads
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarLeft;
