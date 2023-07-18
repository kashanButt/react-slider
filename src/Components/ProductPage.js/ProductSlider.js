import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../Styles/Product.css";

const ProductSlider = () => {
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

  return (
    <div className="productCarousel">
      <Carousel autoPlay>
        {data.map((data) => (
          <div className="">
            <img src={data.img_url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
