import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const SideBarLeft = () => {
  const [carInfo, setCarInfo] = useState(true);
  const [carDetails, setCarDetails] = useState(false);
  const [inspReport, setInspReport] = useState(false);
  const [sellComment, setSellComment] = useState(false);
  const [simAds, setSimAds] = useState(false);
  if (carInfo == true) {
    setCarDetails(false);
    setInspReport(false);
    setSellComment(false);
    setSimAds(false);
  }
  if (carDetails == true) {
    setCarInfo(false);
    setInspReport(false);
    setSellComment(false);
    setSimAds(false);
  }
  // if (inspReport == true) {
  //   setCarInfo(false);
  //   carDetails(false);
  //   setSellComment(false);
  //   setSimAds(false);
  // }
  // if (sellComment == true) {
  //   setCarInfo(false);
  //   carDetails(false);
  //   inspReport(false);
  //   setSimAds(false);
  // }
  // if (simAds == true) {
  //   setCarInfo(false);
  //   carDetails(false);
  //   inspReport(false);
  //   sellComment(false);
  // }
  return (
    <div className="SideBarLeft">
      <div className="options">
        <ul>
          <li className={`${carInfo ? "option-active" : ""}`}>
            <BiSolidRightArrow className="icon" /> Car Info
          </li>
          <li
            className={`${carDetails ? "option-active" : ""}`}
            onClick={() => setCarDetails(true)}
          >
            <BiSolidRightArrow className="icon" /> Car Details
          </li>
          <li className={`${inspReport ? "option-active" : ""}`}>
            <BiSolidRightArrow className="icon" /> Inspection Report
          </li>
          <li className={`${sellComment ? "option-active" : ""}`}>
            <BiSolidRightArrow className="icon" /> Seller's Comments
          </li>
          <li className={`${simAds ? "option-active" : ""}`}>
            <BiSolidRightArrow className="icon" /> Similar Ads
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarLeft;
