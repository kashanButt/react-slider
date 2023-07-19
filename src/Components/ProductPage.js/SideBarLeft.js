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
          <li className={`${carInfo ? "option-active" : ""}`} onClick={() => setCarInfo((active) => !active)}>
            <BiSolidRightArrow className="icon" /> Car Info
          </li>
          <li
            className={`${carDetails ? "option-active" : ""}`}
            onClick={() => setCarDetails((active) => !active)}
          >
            <BiSolidRightArrow className="icon" /> Car Details
          </li>
          <li className={`${inspReport ? "option-active" : ""}`} onClick={() => setInspReport((active) => !active)}>
            <BiSolidRightArrow className="icon" /> Inspection Report
          </li>
          <li className={`${sellComment ? "option-active" : ""}`} onClick={() => setSellComment((active) => !active)}>
            <BiSolidRightArrow className="icon" /> Seller's Comments
          </li>
          <li className={`${simAds ? "option-active" : ""}`} onClick={() => setSimAds((active) => !active)}>
            <BiSolidRightArrow className="icon" /> Similar Ads
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarLeft;
