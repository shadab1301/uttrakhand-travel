import React from "react";
import { NavLink } from "react-router-dom";
const List = () => {
    return (
        <>
            <div className="bannercls">
                <img className="img-fluid" src="images/listing-banner.jpg" alt="" title="" border="0" />
                <div className="container-fluid">
                    <div className="banner-content">
                        <h2 className="banner-title text-white wow bounceInLeft" data-wow-duration="3s">Uttrakhand</h2>
                        <div className="banner-sub-title text-white wow bounceInLeft" data-wow-duration="3s"><NavLink className="banner-title text-white wow bounceInLeft" to="/">Home</NavLink> - Uttrakhand Packages</div>
                        <div className="banner-smalltxt text-white wow bounceInLeft" data-wow-duration="3s">Tour and Travel Solutions</div>
                    </div>
                </div>
            </div>
            <section className="listing-box">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb" className=" breadcrumb-items">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                            <li className="breadcrumb-item active" aria-current="page">List</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-8">
                            <div data-wow-duration="3s" className="fl-list-show shadow">
                                <div className="fl-list-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="fl-img">
                                                <img className="img-fluid" src="images/slide1.jpg" alt="" title="" border="0" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="list-box">
                                                <span className="listbox-title">
                                                    Family Holiday Pack
                                                </span>
                                                <div className="list-detail-inner">
                                                    <span>3 days, 4 nights</span>
                                                </div>
                                                <div className="list-detail">
                                                    <span>Destination Covered - <span className="italic">New Delhi, Mussoorie, Haridwar, Rishikesh</span></span>
                                                </div>
                                                <div className="detail-right">
                                                    <div className="dt-1">On Request</div>
                                                    {/* <div className="dt-2"><strong><i className="fa fa-rupee"></i>1180</strong></div> */}
                                                    <div className="dt-txt">For Person twin Sharing</div>
                                                </div>
                                                <div className="feat-details">
                                                    <strong>Included: </strong> Flight Facility, 5 Star Hotel Sighseeing, Transfer, Meals
                                                </div>
                                                <div className="list-detail">
                                                    <span className="italic">Honeymoon | Adventure | Sports | Beach | Family</span>
                                                </div>
                                                <div className="sharelist">
                                                    <ul className="share-btn">
                                                        <li><NavLink to="/detail/1" className="view-btn">View Details</NavLink></li>
                                                        <li><NavLink to="" data-toggle="modal" data-target="#Enquire" className="estimate-btn">Enquire</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-wow-duration="3s" className="fl-list-show shadow">
                                <div className="fl-list-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="fl-img">
                                                <img className="img-fluid" src="images/slide2.jpg" alt="" title="" border="0" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="list-box">
                                                <span className="listbox-title">
                                                    Family Holiday Pack
                                                </span>
                                                <div className="list-detail-inner">
                                                    <span>3 days, 4 nights</span>
                                                </div>
                                                <div className="list-detail">
                                                    <span>Destination Covered - <span className="italic">New Delhi, Mussoorie, Haridwar, Rishikesh</span></span>
                                                </div>
                                                <div className="detail-right">
                                                    <div className="dt-1">On Request</div>
                                                    <div className="dt-txt">For Person twin Sharing</div>
                                                </div>
                                                <div className="feat-details">
                                                    <strong>Included: </strong> Flight Facility, 5 Star Hotel Sighseeing, Transfer, Meals
                                                </div>
                                                <div className="list-detail">
                                                    <span className="italic">Honeymoon | Adventure | Sports | Beach | Family</span>
                                                </div>
                                                <div className="sharelist">
                                                    <ul className="share-btn">
                                                        <li><NavLink to="/detail/1" className="view-btn">View Details</NavLink></li>
                                                        <li><NavLink to="" data-toggle="modal" data-target="#Enquire" className="estimate-btn">Enquire</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-wow-duration="3s" className="fl-list-show shadow">
                                <div className="fl-list-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="fl-img">
                                                <img className="img-fluid" src="images/hotdeals1.jpeg" alt="" title="" border="0" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="list-box">
                                                <span className="listbox-title">
                                                    Family Holiday Pack
                                                </span>
                                                <div className="list-detail-inner">
                                                    <span>3 days, 4 nights</span>
                                                </div>
                                                <div className="list-detail">
                                                    <span>Destination Covered - <span className="italic">New Delhi, Mussoorie, Haridwar, Rishikesh</span></span>
                                                </div>
                                                <div className="detail-right">
                                                    <div className="dt-1">On Request</div>
                                                    <div className="dt-txt">For Person twin Sharing</div>
                                                </div>
                                                <div className="feat-details">
                                                    <strong>Included: </strong> Flight Facility, 5 Star Hotel Sighseeing, Transfer, Meals
                                                </div>
                                                <div className="list-detail">
                                                    <span className="italic">Honeymoon | Adventure | Sports | Beach | Family</span>
                                                </div>
                                                <div className="sharelist">
                                                    <ul className="share-btn">
                                                        <li><NavLink to="/detail/1" className="view-btn">View Details</NavLink></li>
                                                        <li><NavLink to="" data-toggle="modal" data-target="#Enquire" className="estimate-btn">Enquire</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-wow-duration="3s" className="fl-list-show shadow">
                                <div className="fl-list-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="fl-img">
                                                <img className="img-fluid" src="images/hotdeals3.jpeg" alt="" title="" border="0" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="list-box">
                                                <span className="listbox-title">
                                                    Family Holiday Pack
                                                </span>

                                                <div className="list-detail-inner">
                                                    <span>3 days, 4 nights</span>
                                                </div>
                                                <div className="list-detail">
                                                    <span>Destination Covered - <span className="italic">New Delhi, Mussoorie, Haridwar, Rishikesh</span></span>
                                                </div>
                                                <div className="detail-right">
                                                    <div className="dt-1">On Request</div>
                                                    <div className="dt-txt">For Person twin Sharing</div>
                                                </div>
                                                <div className="feat-details">
                                                    <strong>Included: </strong> Flight Facility, 5 Star Hotel Sighseeing, Transfer, Meals
                                                </div>
                                                <div className="list-detail">
                                                    <span className="italic">Honeymoon | Adventure | Sports | Beach | Family</span>
                                                </div>
                                                <div className="sharelist">
                                                    <ul className="share-btn">
                                                        <li><NavLink to="/detail/1" className="view-btn">View Details</NavLink></li>
                                                        <li><NavLink to="" data-toggle="modal" data-target="#Enquire" className="estimate-btn">Enquire</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="filter-sec shadow">
                                <div className="filter-title">
                                    <div className="fl-title text-center">
                                        Our Recommended Package
                                    </div>
                                </div>
                                <hr />
                                <div className="fl-checkbox">
                                    <div className="fl-title">
                                        <h6>Chardham Yatra Helicopter Tour - 4 N / 5 D</h6>
                                    </div>
                                </div>
                                <div className="fl-checkbox">
                                    <div className="fl-title">
                                        <h6>Chardham Yatra Helicopter Tour - 4 N / 5 D</h6>
                                    </div>
                                </div>

                                <div className="fl-checkbox">
                                    <div className="fl-title">
                                        <h6>Chardham Yatra Helicopter Tour - 4 N / 5 D</h6>
                                    </div>
                                </div>


                                <div className="fl-checkbox">
                                    <div className="fl-title">
                                        <h6>Chardham Yatra Helicopter Tour - 4 N / 5 D</h6>
                                    </div>
                                </div>

                                <div className="fl-checkbox">
                                    <div className="fl-title">
                                        <h6>Chardham Yatra Helicopter Tour - 4 N / 5 D</h6>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="testimonial">
                <div className="container">
                    <form className="trip-form" action="">
                        <div className="news-letter">
                            <h3 className="text-white text-center">Let us help you plan your trip</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <select className="form-control" id="sal" name="sellist1">
                                    <option>Mr.</option>
                                    <option>Miss</option>
                                    <option>Mrs.</option>
                                </select>
                            </div>
                            <div className="col-md-5">
                                <input type="text" name="FName" id="FName" placeholder="First name" className="form-control" />
                            </div>
                            <div className="col-md-5">
                                <input type="text" name="LName" id="LName" placeholder="Last name" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <select className="form-control" id="cntry-code" name="sellist1">
                                    <option>+91</option>
                                    <option>+92</option>
                                    <option>+1684</option>
                                </select>
                            </div>
                            <div className="col-md-5">
                                <input type="text" name="FName" id="mobile" placeholder="Mobile Number" className="form-control" />
                            </div>
                            <div className="col-md-5">
                                <input type="text" name="LName" id="email" placeholder="E-mail Address" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <textarea name="" id="" cols="30" rows="5" placeholder="Any Special Request" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-8 col-lg-4 col-md-4 col-sm 12 col-12">
                                <button className="reqst-btn float-right" data-wow-duration="3s">Send Enquery</button>
                            </div>
                        </div>
                    </form>

                </div>
            </section>
        </>
    );
}
export default List;