import React from "react";
import { NavLink} from "react-router-dom";
import Testimonial from "./Testimonial";
import Services from "../Service/Services";
const Home = () => {
    return (
        <>
            <section id="bannerslider">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <NavLink to="/list">
                            <div className="banner-txt zoomIn" data-wow-duration="3s">Hot <span className="theme-color">Deals</span> this week</div>
                            <img src="images/slide1.jpg" alt="slide2" title="" border="0" /></NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="/list">
                            <div className="banner-txt zoomIn" data-wow-duration="3s">Hot <span className="theme-color">Deals</span> this week</div>
                            <img src="images/slide2.jpg" alt="slide2" title="" border="0" /></NavLink>
                    </div>
                </div>
            </section>


            {/* <section className="hot-deals">

                <section className="search-form-box">
               
        </section >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-title">
                            <h1 className="text-center wow zoomIn" data-wow-duration="3s" >Hot Deals this Week <sup>
                                <i className="fa fa-star" aria-hidden="true"></i> </sup>
                            </h1>
                        </div>
                    </div>
                </div>
                <section id="demos">
                    <div className="">
                        <div className="loop owl-carousel owl-theme">
                            <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="hotdeals-box">
                                    <div className="upper-caption">
                                        <h4>NEW PROMO</h4>
                                    </div>
                                    <NavLink to=""> <img src="images/hotdeals1.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></NavLink>
                                    <NavLink to="">
                                        <div className="carousel-caption">
                                            <span>Tallinn</span>
                                            <p>Brazil</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="hotdeals-box">
                                    <div className="upper-caption">
                                        <h4>NEW PROMO</h4>
                                    </div>
                                    <NavLink to="">   <img src="images/hotdeals2.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></NavLink>
                                    <NavLink to="">
                                        <div className="carousel-caption">
                                            <span>Salvador Da Bahia</span>
                                            <p>Democrac Republic of the Congo</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="hotdeals-box">
                                    <div className="upper-caption">
                                        <h4>NEW PROMO</h4>
                                    </div>
                                    <NavLink to="">     <img src="images/hotdeals3.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></NavLink>
                                    <NavLink to="">
                                        <div className="carousel-caption">
                                            <span>Lima</span>
                                            <p>Bhutan</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="hotdeals-box">
                                    <div className="upper-caption">
                                        <h4>NEW PROMO</h4>
                                    </div>
                                    <NavLink to=""> <img src="images/hotdeals1.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></NavLink>
                                    <NavLink to="">
                                        <div className="carousel-caption">
                                            <span>Tallinn</span>
                                            <p>Brazil</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="hotdeals-box">
                                    <div className="upper-caption">
                                        <h4>NEW PROMO</h4>
                                    </div>
                                    <NavLink to=""> <img src="images/hotdeals2.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></NavLink>
                                    <NavLink to="">
                                        <div className="carousel-caption">
                                            <span>Tallinn</span>
                                            <p>Brazil</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row">
                    <div className="col-md-12">
                        <NavLink className="readmore wow zoomIn" to="" data-wow-duration="3s">See More Promo</NavLink>
                    </div>
                </div>
            </div>
</section > */}

<section className="best-places">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="title-main">
                    <h2><strong>Recommended <span>Best Tourist Places</span> in Uttarakhand to visit </strong> </h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="theme-box shadow best-places-box ">
                    <div className="bestplace-img">
                        <img className="img-fluid" src="images/hotdeals1.jpeg" alt="" title="" border="0"/>
                    </div>
                    <div className="theme-content">
                        <ul>
                            <li>
                                <div className="theme-title">Dheradun</div>
                            </li>
                        </ul>
                        {/* <p>3Days, 4 NIghts </p> */}
                        {/* <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p> */}
                        <ul className="rating-sec">
                            {/* <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li> */}
                            <li><NavLink to="/detail" className="dt-view">VIEW MORE</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="theme-box shadow best-places-box ">
                    <div className="bestplace-img">
                        <img className="img-fluid" src="images/hotdeals2.jpeg" alt="" title="" border="0"/>
                    </div>
                    <div className="theme-content">
                        <ul>
                            <li>
                                <div className="theme-title">Rishikesh</div>
                            </li>
                        </ul>
                        {/* <p>3Days, 4 NIghts </p> */}
                        {/* <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p> */}
                        <ul className="rating-sec">
                            {/* <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li> */}
                            <li><NavLink to="/detail" className="dt-view">VIEW MORE</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="theme-box shadow best-places-box ">
                    <div className="bestplace-img">
                        <img className="img-fluid" src="images/hotdeals3.jpeg" alt="" title="" border="0"/>
                    </div>
                    <div className="theme-content">
                        <ul>
                            <li>
                                <div className="theme-title">Haridwar</div>
                            </li>
                        </ul>
                        {/* <p>3Days, 4 NIghts</p> */}
                        {/* <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p> */}
                        <ul className="rating-sec">
                            {/* <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li> */}
                            <li><NavLink to="/detail" className="dt-view">VIEW MORE</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="theme-box shadow best-places-box">
                    <div className="bestplace-img">
                        <img className="img-fluid" src="images/hotdeals1.jpeg" alt="" title="" border="0"/>
                    </div>
                    <div className="theme-content">
                        <ul>
                            <li>
                                <div className="theme-title">Paris city Tour</div>
                            </li>
                        </ul>
                        {/* <p>3Days, 4 NIghts </p> */}
                        {/* <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p> */}
                        <ul className="rating-sec">
                            {/* <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li> */}
                            <li><NavLink to="/detail" className="dt-view">VIEW MORE</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <NavLink className="readmore-right" to="/list">See All</NavLink>
    {/* </div> */}
</section>


<section className="best-places">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="title-main">
                    <h2><span>Top</span> Recommended <span>Travel Package </span>in Uttarakhand to visit  </h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="theme-box shadow best-places-box ">
                    <div className="bestplace-img">
                        <img className="img-fluid" src="images/hotdeals1.jpeg" alt="" title="" border="0"/>
                    </div>
                    <div className="theme-content">
                        <ul>
                            <li>
                                <div className="theme-title">Char Dham Yatra Tour Package</div>
                            </li>
                        </ul>
                        <p>3Days, 4 NIghts</p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><NavLink to="/detail" className="dt-view">VIEW MORE</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="theme-box shadow best-places-box">
                    <div className="bestplace-img">
                        <img className="img-fluid" src="images/hotdeals2.jpeg" alt="" title="" border="0"/>
                    </div>
                    <div className="theme-content">
                        <ul>
                            <li>
                                <div className="theme-title">Mussoorie - Dhanaulti Tour Package</div>
                            </li>
                        </ul>
                        <p>3Days, 4 NIghts</p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><NavLink to="/detail" className="dt-view">VIEW MORE</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="theme-box shadow best-places-box">
                    <div className="bestplace-img">
                        <img className="img-fluid" src="images/hotdeals3.jpeg" alt="" title="" border="0"/>
                    </div>
                    <div className="theme-content">
                        <ul>
                            <li>
                                <div className="theme-title">Complete Haridwar Package</div>
                            </li>
                        </ul>
                        <p>3Days, 4 NIghts</p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><NavLink to="/detail" className="dt-view">VIEW MORE</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="theme-box shadow best-places-box">
                    <div className="bestplace-img">
                        <img className="img-fluid" src="images/hotdeals1.jpeg" alt="" title="" border="0"/>
                    </div>
                    <div className="theme-content">
                        <ul>
                            <li>
                                <div className="theme-title">Complete Haridwar Package</div>
                            </li>
                        </ul>
                        <p>3Days, 4 NIghts</p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><NavLink to="/detail" className="dt-view">VIEW MORE</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <NavLink className="readmore-right" to="/list">See All</NavLink>
    </div>
    {/* </div> */}
</section>

<Services/>
<Testimonial/>
    </>
);
}
export default Home;