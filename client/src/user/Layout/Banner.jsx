import React from "react";
import { Link, NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
// import listingimg from "../../../../public/images/listing-banner.jpg";
import listingimg from "../../../public/images/listing-banner.jpg";
import detailsimg from "../../../public/images/details-banner.jpg";
import GalleryBanner from "../../../public/images/listing-banner.jpg";
import { Slide,Fade,Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const Banner = () => {
    const location = useLocation();
    const URLPATH = location.pathname.trim().split("/");
    const FilertPAth = URLPATH.filter(Boolean);
    console.log(FilertPAth);

    console.log(FilertPAth?.[0]);

    // FilertPAth.length=9999;

    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }

      const slideImages = [
       
        {
          url: 'images/slide1.jpg',
          caption: 'Slide 1',
          height:"400px"
        },
        {
          url: 'images/slide2.jpg',
          caption: 'Slide 2',
          height:"400px"

        },
        {
            url: 'images/slide3.jpg',
            caption: 'Slide 3',
          height:"400px"

          },
          {
            url: 'images/slide4.jpg',
            caption: 'Slide 4',
          height:"400px"

          },
      ];
    const displayMessage = () => {
        if (FilertPAth?.length === 0) {
            return <>

<div className="slide-container">
        <Fade autoplay={true}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span >{slideImage.caption}</span> */}
                <h5>
                <span style={{fontWeight: "900"}} className="theme-color"> DEVBHOOMI </span>
                <span style={{fontWeight: "900"}}> TOURS OPERATORS &nbsp;</span>
                </h5>
                 <h5 style={{fontWeight: "900"}} className="theme-color">"FEEL THE BEAUTY OF HEAVEN"</h5>
              </div>
            </div>
          ))} 
        </Fade>
      </div>


                {/* <section id="bannerslider">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <NavLink to="/list/all">
                                <div className="banner-txt zoomIn" data-wow-duration="3s">
                                    <span className="theme-color"> DEVBHOOMI</span> TOURS OPERATORS
                                    <h5 className="theme-color">FEEL THE BEAUTY OF HEAVEN</h5>
                                </div>
                                <img src="images/slide1.jpg" alt="slide2" title="" border="0" />
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to="/list/all">
                                <div className="banner-txt zoomIn" data-wow-duration="3s">
                                    <span className="theme-color"> DEVBHOOMI</span> TOURS OPERATORS
                                    <h5 className="theme-color">FEEL THE BEAUTY OF HEAVEN</h5>
                                </div>
                                <img src="images/slide2.jpg" alt="slide2" title="" border="0" />
                            </NavLink>
                        </div>
                    </div>
                </section> */}

                {/* <div className="bannercls"> */}
                    {/* <img className="img-fluid" src={listingimg} alt="" title="" border="0" /> */}
                    {/* <NavLink to="/list/all">
                                <div className="banner-txt zoomIn" data-wow-duration="3s">
                                    <span className="theme-color"> DEVBHOOMI</span> TOURS OPERATORS
                                    <h5 className="theme-color">FEEL THE BEAUTY OF HEAVEN</h5>
                                </div>
                                <img src="images/slide2.jpg" alt="slide2" title="" border="0" />
                            </NavLink> */}
                {/* </div> */}

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