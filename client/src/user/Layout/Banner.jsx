import React from "react";
import { Link, NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
// import listingimg from "../../../../public/images/listing-banner.jpg";
import listingimg from "../../../public/images/listing-banner.jpg";
import detailsimg from "../../../public/images/details-banner.jpg";
import GalleryBanner from "../../../public/images/listing-banner.jpg";
export const Banner = () => {
    const location = useLocation();
    const URLPATH = location.pathname.trim().split("/");
    const FilertPAth = URLPATH.filter(Boolean);
    console.log(FilertPAth);

    console.log(FilertPAth?.[0]);

    // FilertPAth.length=9999;
    const displayMessage = () => {
        if (FilertPAth?.length === 0) {
            return <>
                <section id="bannerslider">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <NavLink to="/list/all">
                                <div className="banner-txt zoomIn" data-wow-duration="3s">
                                    Hot <span className="theme-color">Deals</span> this month
                                </div>
                                <img src="images/slide1.jpg" alt="slide2" title="" border="0" />
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to="/list/all">
                                <div className="banner-txt zoomIn" data-wow-duration="3s">
                                    Hot <span className="theme-color">Deals</span> this month
                                </div>
                                <img src="images/slide2.jpg" alt="slide2" title="" border="0" />
                            </NavLink>
                        </div>
                    </div>
                </section>
            </>

        }
        else
            if (FilertPAth?.[0] == "list") {
                return <>
                    <div className="bannercls">
                        <img className="img-fluid" src={listingimg} alt="" title="" border="0" />
                        <div className="container-fluid">
                            <div className="banner-content">
                                <h2 className="banner-title text-white wow bounceInLeft" data-wow-duration="3s">Uttrakhand</h2>
                                <div className="banner-sub-title text-white wow bounceInLeft" data-wow-duration="3s"><NavLink className="banner-title text-white wow bounceInLeft" to="/">Home</NavLink> - Uttrakhand Packages</div>
                                <div className="banner-smalltxt text-white wow bounceInLeft" data-wow-duration="3s">Tour and Travel Solutions</div>
                            </div>
                        </div>
                    </div>
                </>
            }
            else
                if (FilertPAth?.[0] == "detail") {
                    return <>
                        <div className="bannercls">
                            <img className="img-fluid" src={detailsimg} alt="" title="" border="0" />
                            <div className="container-fluid">
                                <div className="banner-content">
                                    <h2 className="banner-title text-white wow bounceInLeft">Mussoorie - Dhanaulti Tour Package
                                    </h2>
                                    <div className="banner-sub-title text-white wow bounceInLeft">
                                        Mussoorie 2N, Dhanaulti 1N
                                    </div>
                                    <div className="banner-smalltxt text-white wow bounceInLeft">Tour and Travel Solutions</div>
                                </div>
                            </div>
                        </div>
                    </>
                }

                else
                    if (FilertPAth?.[0] == "gallery") {
                        return <>
                            <div className="bannercls">
                                <img className="img-fluid" src="images/listing-banner.jpg" alt="" title="" border="0" />
                                <div className="container-fluid">
                                    <div className="banner-content">
                                        <h2 className="banner-title text-white wow bounceInLeft" data-wow-duration="3s"><NavLink className="banner-title text-white wow bounceInLeft" to="/">Home</NavLink>/Our Gallery</h2>
                                    </div>
                                </div>
                            </div>

                        </>
                    }
        return
        <>

        </>
    }


    return (
        displayMessage()
    );
}