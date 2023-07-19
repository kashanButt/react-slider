import React from "react";
import { GoCalendar } from "react-icons/go";
import { IoSpeedometer } from "react-icons/io5";
import { RiGasStationFill } from "react-icons/ri";
import { TbManualGearbox } from "react-icons/tb";

const vehicleInfo = () => {
  return (
    <div className="vehicleInfo" id="vehicleInfo">
      <div className="baseInfo">
        <div className="info">
          <GoCalendar className="icon" />
          <p>2013</p>
        </div>
        <div className="info">
          <IoSpeedometer className="icon" />
          <p>126,809 Km</p>
        </div>
        <div className="info">
          <RiGasStationFill className="icon" />
          <p>Petrol</p>
        </div>
        <div className="info">
          <TbManualGearbox className="icon" />
          <p>Automatic</p>
        </div>
      </div>
      <div className="moreInfo">
        <div className="info">
          <span className="row-one">Registered In</span>
          <span className="row-two">Islamabad</span>
        </div>
        <div className="info">
          <span className="row-one">Color</span>
          <span className="row-two">White</span>
        </div>
        <div className="info">
          <span className="row-one">Assembly</span>
          <span className="row-two">Imported</span>
        </div>
        <div className="info">
          <span className="row-one">Engine Capacity</span>
          <span className="row-two">660 cc</span>
        </div>
        <div className="info">
          <span className="row-one">Body Type</span>
          <span className="row-two">Micro Van</span>
        </div>
        <div className="info">
          <span className="row-one">Last Updated:</span>
          <span className="row-two">Jul 19,2023</span>
        </div>
        <div className="info">
          <span className="row-one">Add Ref#</span>
          <span className="row-two">7442862</span>
        </div>
        <div className="info">
          <span className="row-one">Auction Grade</span>
          <span className="row-two">5</span>
        </div>
        <div className="info">
          <span className="row-one">Chasis No.</span>
          <span className="row-two">DR64V-791245</span>
        </div>
      </div>
    </div>
  );
};

export default vehicleInfo;
