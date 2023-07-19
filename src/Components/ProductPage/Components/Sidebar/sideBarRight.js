import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const SideBarRight = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="SideBarRight">
      <div className="SideBarRightUpper">
        <div className="price">
          <h3>PKR 4,520,000</h3>
          <span>Managed By Pak Wheels</span>
        </div>
        <div className="managedBy">
          <h3>Managed By Pak Wheels</h3>
          <div className="images">
            <div className="img">
              <img
                src="https://wsa2.pakwheels.com/assets/sell-it-for-me/check-points-bae3335950796578057380edfd4e3a97.svg"
                alt=""
              />
              <span>Inspected By Pak Wheels</span>
            </div>
            <div className="img">
              <img
                src="https://wsa4.pakwheels.com/assets/sell-it-for-me/docs-188e1a7b80436b99c89754fd2eda24b6.svg"
                alt=""
              />
              <span>Documents Checked</span>
            </div>
            <div className="img">
              <img
                src="https://wsa1.pakwheels.com/assets/sell-it-for-me/secure-f8a1440be5f259f6f778247f9778545e.svg"
                alt=""
              />
              <br />
              <span>Secure Transactions</span>
            </div>
          </div>
        </div>
        <div className="btns">
          <button>
            <BsFillTelephoneFill className="icons" />{" "}
            {login ? "04234509" : "Login"}
          </button>
          <button>
            <GoMail className="icons" /> Send Message
          </button>
        </div>
      </div>
      <div className="SideBarRightBottom">
        <h2>Seller Details</h2>
        <hr />
        <img
          src="https://cache3.pakwheels.com/system/dealerships/dealers/000/017/268/thumb/17268.jpg?1658845406"
          alt=""
        />
        <hr />
        <div className="dealerInfo">
          <div className="info">
            <div className="heading">
              <strong>Dealer <span>:</span></strong>
            </div>
            <div className="content">
              <p>PakWheels Karachi</p>
            </div>
          </div>
          <div className="info">
            <div className="heading">
              <strong>Address<span>:</span></strong>
            </div>
            <div className="content">
              <p>Suit No : 303 Third Floor Tariq Centre Main Tariq Road</p>
            </div>
          </div>
          <div className="info">
            <div className="heading">
              <strong>Timmings<span>:</span></strong>
            </div>
            <div className="content">
              <p>09:00 AM to 09:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarRight;
