import React from "react";
import { NavLink } from "react-router-dom";
const Detail = () => {
    return (
        <>
            <div className="bannercls">
                <img className="img-fluid" src="images/details-banner.jpg" alt="" title="" border="0" />
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
            <section className="detail-sec">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb" className=" breadcrumb-items">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Details</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="dt-tabbing-sec">
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="Trip_Overview">
                                        <div className="arrive-box">
                                            <div className="dt-title ">Our Mussoorie - Dhanaulti Tour Package </div>
                                            {/* <div className="dt-price "><strong>Price Includes:</strong>
                                                <span>3 Hotel(s), 10 Sightseeings, Only Breakfast, Cab, Airpot Transfers</span>
                                            </div> */}
                                            <div className="dt-box-1 shadow">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="dt-img ">
                                                            <img className="img-fluid" src="images/details-banner.jpg" alt="" title="" border="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <p>Listed here are some of the exclusive tour packages that we have customized for our valuable clients.
                                                            Just glance through these packages, and plan your trip with us for a memorable touring experience.</p>


                                                        <div className="sharelist">
                                                            <ul className="share-btn">
                                                                <li><NavLink to="" data-toggle="modal" data-target="#Enquire" className="estimate-btn">Enquire</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="">
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

                </div>
            </section>
        </>
    );
}
export default Detail;