import React from "react";
import { NavLink } from "react-router-dom";
export const About = () => {
    return (<>
        <div className="bannercls">
            <img className="img-fluid" src="images/listing-banner.jpg" alt="" title="" border="0" />
            <div className="container-fluid">
                <div className="banner-content">
                    <h2 className="banner-title text-white wow bounceInLeft" data-wow-duration="3s"><NavLink className="banner-title text-white wow bounceInLeft" to="/">Home</NavLink>/About Us</h2>
                </div>
            </div>
        </div>

        <section className="bt-place">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-1 col-md-10">
                        <div className="bt-left">
                            <div className="fl-title text-center">
                                <h3>About {JSON.stringify(import.meta.env.VITE_REACT_WEBNAME)}</h3>
                            </div>
                            <div className="fl-title blacktxt text-center">
                                We provide first class tour and travel services in Uttrakhand:
                            </div>
                            <p className="text-center">
                                <span style={{color:"#1a4d78"}}>Devbhoomi Tours Operators,</span> is the most popular travel agency in Devprayag.
                                We take you to the most visited places as well as those hidden places which are still untouched and spectacular.
                                We provide you with a wide list of places and packages that are much lower in budget and good in Experience.
                                Our team is widely experienced in handling variety of tours due to their extensive knowledge and we are knowledgeable and flexible enough to provide customized tours.
                                Whether you are alone or with family and children, you can rest assured that you can make your journey more beautiful.
                                Because it is our responsibility to plan for you. We provide you the best service from the beginning till the end of your journey.
                                You can be rest assured that you are travelling with one of the most trusted and qualified travel agents in the area.

                            </p>
                        </div>
                    </div>

                </div>

                <div className="row">

                </div>
            </div>
        </section>
    </>);
}
