import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import Header from "../Pages/Layout/Header";
import Footer from "../Pages/Layout/Footer";
export const UserLayout = () => {
  return (
    <>
      <Header />
      <section
        id="bannerslider"
        // style={{  }}
      >
        <div className="owl-carousel owl-theme">
          <div className="item">
            <NavLink to="/list">
              <div className="banner-txt zoomIn" data-wow-duration="3s">
                Hot <span className="theme-color">Deals</span> this week
              </div>
              <img src="images/slide1.jpg" alt="slide2" title="" border="0" />
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/list">
              <div className="banner-txt zoomIn" data-wow-duration="3s">
                Hot <span className="theme-color">Deals</span> this week
              </div>
              <img src="images/slide2.jpg" alt="slide2" title="" border="0" />
            </NavLink>
          </div>
        </div>
      </section>

      <Outlet />
      <Footer />
    </>
  );
};
