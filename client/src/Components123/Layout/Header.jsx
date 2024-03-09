import React from "react";
import { NavLink } from "react-router-dom";
import SErviceData from "../Service/ServiceData.json";

const Header = () => {
    const serviceD = SErviceData?.Service;

    return (
        <>
            <nav id="top" className="navbar navbar-expand-md bg-dark navbar-dark custom-nav">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img className="img-fluid" src="images/raj-travels-logo.png" alt="" title="" border="0" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Top destination</NavLink>
                                <div className="shadow dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="col-ft1">
                                                    <div className="title wow zoomIn" data-wow-duration="3s">RISHIKESH</div>
                                                    <ul className="ft1-list">
                                                        <li className="wow zoomIn" data-wow-duration="3s">Ram Jhula & Janki Jhula</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Lakshman Jhula</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Neelkanth Mahadev</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Triveni Ghat</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="col-ft1">
                                                    <div className="title wow zoomIn" data-wow-duration="3s">RISHIKESH</div>
                                                    <ul className="ft1-list">
                                                        <li className="wow zoomIn" data-wow-duration="3s">Ram Jhula & Janki Jhula</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Lakshman Jhula</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Neelkanth Mahadev</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Triveni Ghat</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="col-ft1">
                                                    <div className="title wow zoomIn" data-wow-duration="3s">RISHIKESH</div>
                                                    <ul className="ft1-list">
                                                        <li className="wow zoomIn" data-wow-duration="3s">Ram Jhula & Janki Jhula</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Lakshman Jhula</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Neelkanth Mahadev</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Triveni Ghat</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="col-ft1">
                                                    <div className="title wow zoomIn" data-wow-duration="3s">RISHIKESH</div>
                                                    <ul className="ft1-list">
                                                        <li className="wow zoomIn" data-wow-duration="3s">Ram Jhula & Janki Jhula</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Lakshman Jhula</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Neelkanth Mahadev</li>
                                                        <li className="wow zoomIn" data-wow-duration="3s">Triveni Ghat</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!--  /.container  --> */}
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Tour packages</NavLink>
                                <div className="shadow dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="col-ft1 wow zoomIn">
                                                    <div className="bestplace-img">
                                                        <img className="img-fluid" src="images/hotdeals1.jpeg" alt="" title="" border="0" />
                                                    </div>
                                                    <div className="title" data-wow-duration="3s">CHAR DHAM TOUR PACKAGES</div>

                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="col-ft1 wow zoomIn">
                                                    <div className="bestplace-img">
                                                        <img className="img-fluid" src="images/hotdeals1.jpeg" alt="" title="" border="0" />
                                                    </div>
                                                    <div className="title" data-wow-duration="3s">MUSSOORIE TOUR PACKAGE</div>

                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="col-ft1 wow zoomIn">
                                                    <div className="bestplace-img">
                                                        <img className="img-fluid" src="images/hotdeals1.jpeg" alt="" title="" border="0" />
                                                    </div>
                                                    <div className="title " data-wow-duration="3s">RISHIKESH TOUR PACKAGE</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="col-ft1 wow zoomIn">
                                                    <div className="bestplace-img">
                                                        <img className="img-fluid" src="images/hotdeals1.jpeg" alt="" title="" border="0" />
                                                    </div>
                                                    <div className="title" data-wow-duration="3s">HARIDWAR TOUR PACKAGE</div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <!--  /.container  --> */}
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Our Services</NavLink>
                                <div className="shadow dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="">
                                        <ul style={{ listStyle: "none" }}>
                                        {serviceD.map((val,ind)=><>
                                            <li className=" wow zoomIn" data-wow-duration="3s" key={ind}>{val?.title}</li>
                                            </>)}
                                        </ul>
                                    </div>
                                    {/* <!--  /.container  --> */}
                                </div>
                            </li>
                            {/* 
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Travelogues </NavLink>
                </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/gallery">Our Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">Contact</NavLink>
                            </li>

                            {/* <li className="nav-item">
                                <button type="button" className="btn registerbtn" data-toggle="modal" data-target="#myModal">
                                    Register
                                </button>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="login-box">
                    {/* <!--login popup--> */}
                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="row">
                                        <button type="button" className="close signbtn" data-dismiss="modal">&times;</button>
                                        <div className="col-md-6 col-xs-12 col-sm-12">
                                            <div className="rigister">
                                                <div className="popup-title">Sign Up</div>
                                                <form className="rgister-form" action="">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="text" name="" id="F_name" className="form-control" placeholder="First Name" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="text" name="" id="L_name" className="form-control" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input type="text" name="" id="Emailid" className="form-control" placeholder="Email Id" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <select className="form-control" id="sel1" name="sellist1">
                                                                <option>+91</option>
                                                                <option>+92</option>
                                                                <option>+1684</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <input type="email" name="" id="county-mobile" className="form-control" placeholder="Email Id" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input type="password" name="" id="password" className="form-control" placeholder="Password" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input type="password" name="" id="reenter_password" className="form-control" placeholder="Re-enter Password" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <button className="sign-btn form-control" type="submit">Sign Up</button>
                                                        </div>
                                                    </div>
                                                    <p className="sign-txt">(by signing up, you agree to our terms and conditions)</p>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 col-sm-12">
                                            <div className="rigister">
                                                <div className="popup-title">Already a member? Login</div>
                                                <form className="rgister-form" action="">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input type="email" name="" id="email-id" className="form-control" placeholder="Email-id" />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input type="password" name="" id="pwd" className="form-control" placeholder="Enter Password" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <button className="sign-btn form-control" type="submit">Sign In</button>
                                                        </div>
                                                    </div>
                                                    <NavLink to="" className="sign-txt">Forgot your password ?</NavLink>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;