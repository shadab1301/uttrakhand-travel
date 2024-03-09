import React from "react";
import { NavLink } from "react-router-dom";
export const Gallery = () => {
    return (<>
        <div className="bannercls">
            <img className="img-fluid" src="images/listing-banner.jpg" alt="" title="" border="0" />
            <div className="container-fluid">
                <div className="banner-content">
                    <h2 className="banner-title text-white wow bounceInLeft" data-wow-duration="3s"><NavLink className="banner-title text-white wow bounceInLeft" to="/">Home</NavLink>/Our Gallery</h2>
                </div>
            </div>
        </div>

        <section className="bt-place">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-1 col-md-10">
                        <div className="bt-left">
                            <div className="fl-title text-center">
                                <h3>Our  Gallery</h3>
                            </div>





                        </div>
                    </div>

                </div>


            </div>
        </section>
    </>);
}
