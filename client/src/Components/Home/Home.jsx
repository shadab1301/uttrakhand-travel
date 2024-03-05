import React from "react";
import Testimonial from "./Testimonial";
const Home = () => {
    return (
        <>
            <section id="bannerslider">

                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <a href="list.html">
                            <div className="banner-txt zoomIn" data-wow-duration="3s">Hot <span className="theme-color">Deals</span> this week</div>
                            <img src="images/slide1.jpg" alt="slide2" title="" border="0" /></a>
                    </div>
                    <div className="item">
                        <a href="list.html">
                            <div className="banner-txt zoomIn" data-wow-duration="3s">Hot <span className="theme-color">Deals</span> this week</div>
                            <img src="images/slide2.jpg" alt="slide2" title="" border="0" /></a>
                    </div>
                </div>
            </section>


            <section className="hot-deals">

                <section className="search-form-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="search-box shadow home-srch">
                                    <div className="home-tab-btns">
                                        {/* <!-- Nav tabs --> */}
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li role="presentation" className="  active tab-list" title="Tours">
                                                <a href="#tab1" aria-controls="Trip_Overview" role="tab" data-toggle="tab">
                                                    <i className="fa fa-briefcase" aria-hidden="true"></i></a>
                                            </li>
                                            <li role="presentation" className="  tab-list" title="Flights">
                                                <a href="#tab2" aria-controls="Daily_Itinerary" role="tab" data-toggle="tab">
                                                    <i className='fa fa-plane'></i>

                                                </a>
                                            </li>
                                            <li role="presentation" className="  tab-list" title="Hotels">
                                                <a href="#tab3" aria-controls="Inclusions" role="tab" data-toggle="tab">
                                                    <i className="fa fa-building" aria-hidden="true"></i>
                                                </a>
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane active" id="tab1">
                                            <form className="srch_form" action="">
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <input type="text" name="" className="form-control" id="" placeholder="Where do you want to go?" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        {/* <!--<button type="submit" className="search-btn">Search </button>--> */}
                                                        <a href="list.html" className="search-btn">Search </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="tab3">
                                            <form className="srch_form" action="">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input type="text" name="" className="form-control" id="" placeholder="Enter your Destination" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="date-parent">
                                                            <input type="text" name="" className="form-control" id="Departure-Date" placeholder="Departure-Date" />
                                                            <i className="fa fa-calendar date-icon"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group date-parent">
                                                            <input type="text" name="" className="form-control" id="Departure_dob" placeholder="Departure_dob" />
                                                            <i className="fa fa-calendar date-icon"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <select className="form-control" id="Residence" name="sellist1" placeholder="Residence">
                                                            <option>Residence</option>
                                                            <option>India</option>
                                                            <option>Australia</option>
                                                            <option>India</option>
                                                            <option>Australia</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="hotel_select1_inner">
                                                            <div className="travel-box_cls" id="hotel_travller_search">
                                                                <div className="t-box-cls hotel_check form-control">
                                                                    <span className="flight-t-box"> <span className="RoomsTotal">1</span> Room(s),
                                                                        <span className="GuestTotal">2</span> Guests</span>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"></div>
                                                            <div className="room_boxcls hotelrooombox_main tarvellermain hoteltarvller_main" >



                                                                <div className="room_booking_traveller ">
                                                                    <div className="title">Room 1 </div>
                                                                    <div className="row">
                                                                        <div className="form-group col-sm-6 col-xs-6">
                                                                            <label className="control-label" for="adults">Adults (+12 YRS)</label>
                                                                            <select id="adult_1" name="adult[]" className="form-control" >
                                                                                <option value="1">1</option>
                                                                                <option value="2" selected="">2</option>
                                                                                <option value="3">3</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group col-sm-6 col-xs-6">
                                                                            <label className="control-label" for="">Childs(0 - 11YRS)
                                                                            </label>
                                                                            <select name="child[]" className="form-control" id="child_1">
                                                                                <option value="0" selected="">0</option>
                                                                                <option value="1">1</option>
                                                                                <option value="2">2</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group col-sm-6 col-xs-6">
                                                                            <label className="control-label" for="">Childs 1 Age
                                                                            </label>
                                                                            <select name="child[]" className="form-control" id="child_age">
                                                                                <option value="0" selected="">0</option>
                                                                                <option value="1">1</option>
                                                                                <option value="2">2</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="clearfix"></div>
                                                                </div>
                                                                <div className="form-group col-sm-12">
                                                                    <a href="" id="submit" name="submit" className="btn-lg add_more add_more addroom">Add More Room</a>
                                                                </div>

                                                                <div className="clearfix"></div>
                                                                <span className="pull-right" >
                                                                    <a href="" className="pax-details btn btn-group-sm btn-outline btt-btn donemargin"
                                                                        id="done_traveller2">Done</a>
                                                                </span>


                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        {/* <!--<button type="submit" className="search-btn">Search Flight</button>--> */}
                                                        <a href="list.html" className="search-btn">Search </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div role="tabpanel" className="tab-pane" id="tab2">
                                            <form className="srch_form" action="">

                                                <div className="row t-radiobtn">
                                                    <div className="col-md-3 col-lg-3 col-sm-4 col-6">
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="OneWay" name="travel_Way" className="custom-control-input"/>
                                                                <label className="custom-control-label" for="OneWay">One Way</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-sm-4 col-6">
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="RoundTrip" name="travel_Way" className="custom-control-input"/>
                                                                <label className="custom-control-label" for="RoundTrip">Round Trip</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-sm-4 col-6 MultiWay_hide">
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="MultiWay" name="travel_Way" className="custom-control-input"/>
                                                                <label className="custom-control-label" for="MultiWay">Multi City</label>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input className="form-control" type="text" name="" placeholder="Type Source City.." id="" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input className="form-control" type="text" name="" placeholder="Type Destination City.." id="" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="date-parent">
                                                            <input className="form-control" type="text" name="" placeholder="Departure" id="datepicker" />
                                                            <i className="fa fa-calendar date-icon"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="date-parent">
                                                            <input className="form-control" type="text" name="" placeholder="Return" id="datepicker_return" />
                                                            <i className="fa fa-calendar date-icon"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4 col-md-5">




                                                        <div className="hotel_select1_inner">
                                                            <div className="">
                                                                {/* <!--end of label--> */}
                                                                <div className="">
                                                                    <div className="travel-box_cls" id="travller_search">
                                                                        <div className="t-box-cls hotel_check form-control">
                                                                            <span className="flightPaxInfo"><span className="TotalTravellers">4</span> Travellers,
                                                                                <span className="small-text travller_search TravellersClass">Economy</span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="clearfix"></div>
                                                                    <div className="room_boxcls hotelrooombox_main tarvellermain hoteltarvller_main" style={{display:"none"}}>
                                                                        <div className="roomBoxMainIn">
                                                                            <div className="room_booking_traveller ">
                                                                                <div className="row">
                                                                                    <div className="col-md-6">
                                                                                        <div className="title">Passengers</div>
                                                                                        <div className="counter-sec">
                                                                                            <label>Adults <span>(12+ years)</span></label>
                                                                                            <ul className='count-input_cls'>
                                                                                                <li className='col-lg-4 col-md-4 col-sm-12 down_count down_count-cls1 minus-cls' title='Down'>
                                                                                                    <i className="fa fa-minus"></i>
                                                                                                </li>
                                                                                                <li className="col-lg-4 col-md-4 col-sm-12 counter-int ">
                                                                                                    <input className='counter counter1' type="text" placeholder="value..." value='0' />
                                                                                                </li>
                                                                                                <li className='col-lg-4 col-md-4 col-sm-12 up_count down_count-cls1 plus-cls' title='Up'>
                                                                                                    <i className="fa fa-plus"></i>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>

                                                                                        <div className="counter-sec">
                                                                                            <label>Adults <span>(12+ years)</span></label>
                                                                                            <ul className='count-input_cls'>
                                                                                                <li className='col-lg-4 col-md-4 col-sm-12 down_count down_count-cls2 minus-cls' title='Down'>
                                                                                                    <i className="fa fa-minus"></i>
                                                                                                </li>
                                                                                                <li className="col-lg-4 col-md-4 col-sm-12 counter-int ">
                                                                                                    <input className='counter counter2' type="text" placeholder="value..." value='0' />
                                                                                                </li>
                                                                                                <li className='col-lg-4 col-md-4 col-sm-12 up_count down_count-cls2 plus-cls' title='Up'>
                                                                                                    <i className="fa fa-plus"></i>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="counter-sec">
                                                                                            <label>Adults <span>(12+ years)</span></label>
                                                                                            <ul className='count-input_cls'>
                                                                                                <li className='col-lg-4 col-md-4 col-sm-12 down_count down_count-cls3 minus-cls' title='Down'>
                                                                                                    <i className="fa fa-minus"></i>
                                                                                                </li>
                                                                                                <li className="col-lg-4 col-md-4 col-sm-12 counter-int ">
                                                                                                    <input className='counter counter3' type="text" placeholder="value..." value='0' />
                                                                                                </li>
                                                                                                <li className='col-lg-4 col-md-4 col-sm-12 up_count down_count-cls3 plus-cls' title='Up'>
                                                                                                    <i className="fa fa-plus"></i>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>

                                                                                        {/* <!--</div>--> */}
                                                                                    <div className="clearfix"></div>
                                                                                </div>

                                                                                <div className="col-md-6">
                                                                                    <div className="title">Cabin Class</div>
                                                                                    <div className="standard_class">
                                                                                        <div className="radio">
                                                                                            <input className="SelectClass" checked="" type="radio" name="class" id="cabinclass2" data="Economy" value="2"/>
                                                                                                <label for="cabinclass2">Economy</label>
                                                                                        </div>
                                                                                        <div className="radio">
                                                                                            <input className="SelectClass" type="radio" name="class" id="cabinclass3" data="Premium Economy" value="3"/>
                                                                                                <label for="cabinclass3">Premium Economy</label>
                                                                                        </div>
                                                                                        <div className="radio">
                                                                                            <input className="SelectClass" type="radio" name="class" id="cabinclass4" data="Business" value="4"/>
                                                                                                <label for="cabinclass4">Business</label>
                                                                                        </div>
                                                                                        <div className="radio">
                                                                                            <input className="SelectClass" type="radio" name="class" id="cabinclass5" data="PremiumBusiness" value="5"/>
                                                                                                <label for="cabinclass5">PremiumBusiness</label>
                                                                                        </div>
                                                                                        <div className="radio">
                                                                                            <input className="SelectClass" type="radio" name="class" id="cabinclass6" data="First" value="6"/>
                                                                                                <label for="cabinclass6">First</label>
                                                                                        </div>

                                                                                        <div className="clearfix"></div>
                                                                                    </div>




                                                                                    <div className="checkbox_handle">
                                                                                        <input id="checkbox-2100" className="checkbox1-custom" value="1" name="DirectFlight" type="checkbox" un-checked=""/>
                                                                                            <label for="checkbox-2100" className="checkbox1-custom-label"><span>Show Direct flights</span></label>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <span className="pull-right">
                                                                        <a href="" className="pax-details btn btn-group-sm btn-outline btt-btn" id="done_travellerFlight">Done</a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div></div></div>
                                                <div className="col-md-3">
                                                    {/* <!--<button type="submit" className="search-btn">Search Flight</button>--> */}
                                                    <a href="list.html" className="search-btn">Search </a>
                                                </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <a href=""> <img src="images/hotdeals1.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></a>
                                    <a href="">
                                        <div className="carousel-caption">
                                            <span>Tallinn</span>
                                            <p>Brazil</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="hotdeals-box">
                                    <div className="upper-caption">
                                        <h4>NEW PROMO</h4>
                                    </div>
                                    <a href="">   <img src="images/hotdeals2.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></a>
                                    <a href="">
                                        <div className="carousel-caption">
                                            <span>Salvador Da Bahia</span>
                                            <p>Democrac Republic of the Congo</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="hotdeals-box">
                                    <div className="upper-caption">
                                        <h4>NEW PROMO</h4>
                                    </div>
                                    <a href="">     <img src="images/hotdeals3.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></a>
                                    <a href="">
                                        <div className="carousel-caption">
                                            <span>Lima</span>
                                            <p>Bhutan</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="hotdeals-box">
                                    <div className="upper-caption">
                                        <h4>NEW PROMO</h4>
                                    </div>
                                    <a href=""> <img src="images/hotdeals1.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></a>
                                    <a href="">
                                        <div className="carousel-caption">
                                            <span>Tallinn</span>
                                            <p>Brazil</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="hotdeals-box">
                                    <div className="upper-caption">
                                        <h4>NEW PROMO</h4>
                                    </div>
                                    <a href=""> <img src="images/hotdeals2.jpeg" alt="Chicago" className="img-fluid" title="" border="0" /></a>
                                    <a href="">
                                        <div className="carousel-caption">
                                            <span>Tallinn</span>
                                            <p>Brazil</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row">
                    <div className="col-md-12">
                        <a className="readmore wow zoomIn" href="" data-wow-duration="3s">See More Promo</a>
                    </div>
                </div>
            </div>
</section >


<section className="proj-themes">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="title-main">
                    <h2 className=" wow zoomIn" data-wow-duration="3s"><strong>POPULAR</strong> <span>THEMES</span> </h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2 col-sm-6">
                <div className="theme-box wow zoomIn"  data-wow-duration="3s">
                    <div className="th-1">
                        <a href="list.html">   <img className="img-fluid theme-img" src="images/hotdeals1.jpeg" alt="" title="" border="0"/></a>
                    </div>
                    <div className="theme-content">
                        <a href="list.html">
                            <div className="theme-title2">Honeymoon</div>
                        </a>
                        <a href="list.html">  <span className="add-icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        </span>
                        </a>
                        <ul>
                            <li>
                                <p>Starting from <span className="st-price bt-txt"><i className="fa fa-rupee"></i> 10,000</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="theme-box wow zoomIn"  data-wow-duration="3s">
                    <div className="th-1">
                        <a href="list.html">    <img className="img-fluid theme-img" src="images/hotdeals2.jpeg" alt="" title="" border="0"/></a>
                    </div>
                    <div className="theme-content">
                        <a href="list.html">
                            <div className="theme-title2">Adventure</div>
                        </a>
                        <a href="list.html">  <span className="add-icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        </span>
                        </a>
                        <ul>
                            <li>
                                <p>Starting from <span className="st-price bt-txt"><i className="fa fa-rupee"></i>12,000</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="theme-box wow zoomIn"  data-wow-duration="3s">
                    <div className="th-1">
                        <a href="list.html">    <img className="img-fluid theme-img" src="images/hotdeals3.jpeg" alt="" title="" border="0"/></a>
                    </div>
                    <div className="theme-content">
                        <a href="list.html">
                            <div className="theme-title2">Sports</div>
                        </a>
                        <a href="list.html">  <span className="add-icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        </span>
                        </a>
                        <ul>
                            <li>
                                <p>Starting from <span className="st-price bt-txt"><i className="fa fa-rupee"></i>15,000</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="theme-box wow zoomIn"  data-wow-duration="3s">
                    <div className="th-1">
                        <a href="list.html">    <img className="img-fluid theme-img" src="images/hotdeals1.jpeg" alt="" title="" border="0"/></a>
                    </div>
                    <div className="theme-content">
                        <a href="list.html">
                            <div className="theme-title2">Beach</div>
                        </a>
                        <a href="list.html">  <span className="add-icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        </span>
                        </a>
                        <ul>
                            <li>
                                <p>Starting from <span className="st-price bt-txt"><i className="fa fa-rupee"></i>10,000</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="theme-box wow zoomIn"  data-wow-duration="3s">
                    <div className="th-1">
                        <a href="list.html">    <img className="img-fluid theme-img" src="images/hotdeals2.jpeg" alt="" title="" border="0"/></a>
                    </div>
                    <div className="theme-content">
                        <a href="list.html">
                            <div className="theme-title2">Family</div>
                        </a>
                        <a href="list.html">  <span className="add-icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        </span>
                        </a>
                        <ul>
                            <li>
                                <p>Starting from <span className="st-price bt-txt"><i className="fa fa-rupee"></i>12,000</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <a className="readmore-right wow zoomIn" href="list.html"  data-wow-duration="3s">See All</a>
    </div>
</section>


<section className="best-places">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="title-main">
                    <h2><strong>Recommended <span>DOMESTIC</span> & best places to visit </strong> </h2>
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
                                <div className="theme-title">Paris city Tour</div>
                            </li>
                        </ul>
                        <p>3Days, 4 NIghts </p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><a href="details.html" className="dt-view">VIEW MORE</a></li>
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
                                <div className="theme-title">Paris city Tour</div>
                            </li>
                            {/* <!--<li className="details" >-->
                            <!--<p><i className="fa fa-rupee"></i>1180</p>-->
                            <!--</li>--> */}
                        </ul>
                        <p>3Days, 4 NIghts </p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><a href="details.html" className="dt-view">VIEW MORE</a></li>
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
                                <div className="theme-title">Paris city Tour</div>
                            </li>
                        </ul>
                        <p>3Days, 4 NIghts</p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><a href="details.html" className="dt-view">VIEW MORE</a></li>
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
                        <p>3Days, 4 NIghts </p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><a href="details.html" className="dt-view">VIEW MORE</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <a className="readmore-right" href="details.html">See All</a>
    </div>
    {/* </div> */}
</section>


<section className="best-places">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="title-main">
                    <h2>Recommended <span>INTERNATIONAL </span> & best places to visit  </h2>
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
                                <div className="theme-title">Paris city Tour</div>
                            </li>
                        </ul>
                        <p>3Days, 4 NIghts</p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><a href="details.html" className="dt-view">VIEW MORE</a></li>
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
                                <div className="theme-title">Paris city Tour</div>
                            </li>
                        </ul>
                        <p>3Days, 4 NIghts</p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><a href="details.html" className="dt-view">VIEW MORE</a></li>
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
                                <div className="theme-title">Paris city Tour</div>
                            </li>
                        </ul>
                        <p>3Days, 4 NIghts</p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><a href="details.html" className="dt-view">VIEW MORE</a></li>
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
                        <p>3Days, 4 NIghts</p>
                        <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p>
                        <ul className="rating-sec">
                            <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li>
                            <li><a href="details.html" className="dt-view">VIEW MORE</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <a className="readmore-right" href="details.html">See All</a>
    </div>
    {/* </div> */}
</section>

<Testimonial/>
    </>
);
}
export default Home;