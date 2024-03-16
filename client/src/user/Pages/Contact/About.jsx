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
                                <h3>About Himadri Tour</h3>
                            </div>
                            <div className="fl-title blacktxt text-center">
                                We provide first class tour and travel services in Uttrakhand:
                            </div>
                            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum
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
