import React from 'react'
import { NavLink } from "react-router-dom";

const Carousel = ({ height = "70vh", asset }) => {
  return (
    <section
      id="bannerslider"
      style={{ height: height, border: "1px solid red" }}
    >
      <div className="owl-carousel owl-theme">
        {asset.map((val, index) => (
          <div className="item" key={index}>
            <NavLink to="#">
              <div className="banner-txt zoomIn" data-wow-duration="3s">
                {/* Hot <span className="theme-color">Deals</span> this week */}
                {val.heading}
              </div>
              <img src={val.img} alt="slide2" title="" border="0" />
            </NavLink>
          </div>
        ))}

        {/* <div className="item">
          <NavLink to="#">
            <div className="banner-txt zoomIn" data-wow-duration="3s">
              Hot <span className="theme-color">Deals</span> this week
            </div>
            <img src="images/slide2.jpg" alt="slide2" title="" border="0" />
          </NavLink>
        </div> */}
      </div>
    </section>
  );
};

export default Carousel