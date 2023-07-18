import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../../Styles/Slider.module.css";
import { NavLink } from "react-router-dom";
import ProductPage from "../ProductPage.js/ProductPage";

const Slider = ({heading}) => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("./basic-slider-data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={style.slider}>
      <h2 className={style.sliderHeading}>{heading}</h2>
      <Carousel className={style.carousel} responsive={responsive} infiniteLoop>
        {data
          .filter((data) => data.featured == true && data.type == "used")
          .map((data) => (
            <div className={style.sliderCard} key={data.id}>
              <NavLink to="/product-page">
                <img src={data.img_url} alt="" />
                <p className={style.vehicleTitle}>{data.title}</p>
                <p className={style.vehiclePrice}>
                  <span className={style.currency}>{data.currency}</span> {data.price}
                </p>
                <p className={style.vehicleLocation}>{data.location}</p>
              </NavLink>
            </div>
          ))}
      </Carousel>
      {/* <ProductPage id={1} /> */}
    </div>
  );
};

export default Slider;
