import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../Styles/Slider.css";

const Slider = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("./data.json")
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
    <div className="slider">
      <h2 className="sliderHeading">Featured Used Cars for Sale</h2>
      <Carousel className="carousel" responsive={responsive}>
        {data.filter(data => data.featured == true && data.type == 'used').map((data) => (
          <div className="sliderCard" key={data.id}>
            <img src={data.img_url} alt="" />
            <p className="vehicleTitle">{data.title}</p>
            <p className="vehiclePrice">
              <span className="currency">{data.currency}</span> {data.price}
            </p>
            <p className="vehicleLocation">{data.location}</p>
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Slider;
