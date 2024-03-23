import React from "react";
import { NavLink } from "react-router-dom";
import SErviceData from "../Service/ServiceData.json";

const Footer = () => {
    const serviceD = SErviceData?.Service;
    return (
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="ft-1">
                  <div
                    className="ft-title mb-2 wow zoomIn"
                    data-wow-duration="3s"
                  >
                    Social Links
                  </div>
                  <ul
                    className="social-icons wow zoomIn"
                    data-wow-duration="3s"
                  >
                    <li>
                      <NavLink to="">
                        <i className="fa fa-facebook-f"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        <i className="fa fa-twitter"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        <i className="fa fa-linkedin"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        <i className="fa fa-youtube-play"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        <i className="fa fa-instagram"></i>
                      </NavLink>
                    </li>
                  </ul>

                  <div className="news-sec">
                    <form
                      className="newsletter wow zoomIn"
                      data-wow-duration="3s"
                      action=""
                    >
                      <input type="text" name="" className="news-field" />
                    </form>

                    <button
                      type="submit"
                      className="news-btn wow zoomIn"
                      data-wow-duration="3s"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="offset-1 col-lg-3 col-md-6 col-sm-12 col-12">
                <div
                  className="ft-title mb-3 wow zoomIn"
                  data-wow-duration="3s"
                >
                  About Us
                </div>
                <ul className="links pl-0">
                  <li className=" wow zoomIn" data-wow-duration="3s">
                    <NavLink to=""> Auctor porta</NavLink>
                  </li>
                  <li className=" wow zoomIn" data-wow-duration="3s">
                    <NavLink to=""> Aliquam suspendisse faucibus</NavLink>
                  </li>
                  <li className=" wow zoomIn" data-wow-duration="3s">
                    <NavLink to=""> Velit libero libero</NavLink>
                  </li>
                  <li className=" wow zoomIn" data-wow-duration="3s">
                    <NavLink to=""> Interdum mollis</NavLink>
                  </li>
                  <li className=" wow zoomIn" data-wow-duration="3s">
                    <NavLink to=""> Tristique curabitur laoreet</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                <div
                  className="ft-title mb-3 wow zoomIn"
                  data-wow-duration="3s"
                >
                  Services
                </div>
                <ul className="links pl-0">
                  {serviceD.map((val, index) => (
                      <li
                        key={index}
                        className=" wow zoomIn"
                        data-wow-duration="3s"
                      >
                        <NavLink to="" >
                          {val?.title}
                        </NavLink>
                      </li>
                  ))}
                </ul>
              </div>

              {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="ft-title mt-5 wow zoomIn" data-wow-duration="3s">
                                Destinations
                            </div>
                            <ul className="patners-list d-flex flex-wrap">
                                <li className=" wow zoomIn" data-wow-duration="3s"><NavLink to="">
                                    <img className="img-fluid" src="images/slide1.jpg" alt="" title="" border="0" />
                                    <span>Patner-1</span>
                                </NavLink>
                                </li>
                                <li className=" wow zoomIn" data-wow-duration="3s"><NavLink to="">
                                    <img className="img-fluid" src="images/slide1.jpg" alt="" title="" border="0" />
                                    <span>Patner-2</span>
                                </NavLink>
                                </li>
                                <li className=" wow zoomIn" data-wow-duration="3s"><NavLink to="">
                                    <img className="img-fluid" src="images/slide1.jpg" alt="" title="" border="0" />
                                    <span>Patner-3</span>
                                </NavLink>
                                </li>
                                <li className=" wow zoomIn" data-wow-duration="3s"><NavLink to=""> <img className="img-fluid" src="images/slide1.jpg" alt="" title="" border="0" /></NavLink></li>
                                <li className=" wow zoomIn" data-wow-duration="3s"><NavLink to=""> <img className="img-fluid" src="images/slide1.jpg" alt="" title="" border="0" /></NavLink></li>
                                <li className=" wow zoomIn" data-wow-duration="3s"><NavLink to=""> <img className="img-fluid" src="images/slide1.jpg" alt="" title="" border="0" /></NavLink></li>
                                <li className=" wow zoomIn" data-wow-duration="3s"><NavLink to=""> <span>Patner-8</span></NavLink></li>
                                <li className=" wow zoomIn" data-wow-duration="3s"><NavLink to=""> <span>Patner-9</span></NavLink></li>
                            </ul>
                    </div> */}
            </div>
            <div className="go-to-top">
              <NavLink id="back-to-top" to="#top">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
              </NavLink>
            </div>
          </div>
        </footer>

        {/*  */}

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <small className="copyright-txt">
                  © 2024<strong>Demo Agency</strong>. All Rights Reserved.
                </small>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <small
                  className="copyright-txt cpy-moble"
                  style={{ fontSize: "14px" }}
                >
                  Powered by{" "}
                  <NavLink to="">
                    <span style={{ color: "#0b74c4" }}>Sandeep</span>
                    <span style={{ color: "#fb5a2d" }}>Negi</span>
                  </NavLink>
                </small>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-center">
                <ul className="ft-btn-list">
                  <li>
                    {" "}
                    <NavLink className="btn callIcon" to="tel:+91 8178918115">
                      <i className="fa fa-phone" aria-hidden="true"></i> Call Us
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      className="btn enquiry-Icon"
                      data-toggle="modal"
                      data-target="#Enquire"
                    >
                      <i className="fa fa-file-text-o"></i> Send Enquiry
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn wtsapp-icon "
                     to="https://wa.me/918178918115?text=Hii i want to  know about your services." target="_blank">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      Whatsapp
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn filter-icon" to="#">
                      <i className="fa fa-filter" aria-hidden="true"></i>Filter
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="login-box">
              <div className="modal fade" id="Enquire">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="modal-title text-white">Send Enquiry</div>
                      <button
                        type="button"
                        className="close enquiryclose"
                        data-dismiss="modal"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12">
                          <div className="rigister">
                            <form className="rgister-form" action="">
                              <div className="row">
                                <div className="col-md-2">
                                  <select
                                    className="form-control"
                                    id="Salutation"
                                    name="Salutation"
                                  >
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Miss</option>
                                  </select>
                                </div>
                                <div className="col-md-5">
                                  <input
                                    type="text"
                                    name=""
                                    id="Enquire_F_name"
                                    className="form-control"
                                    placeholder="First Name"
                                  />
                                </div>
                                <div className="col-md-5">
                                  <input
                                    type="text"
                                    name=""
                                    id="Enquire_L_name"
                                    className="form-control"
                                    placeholder="Last Name"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-2">
                                  <select
                                    className="form-control"
                                    id="enquire-mobile"
                                    name="enquire-mobile"
                                  >
                                    <option>+91</option>
                                  </select>
                                </div>
                                <div className="col-md-5">
                                  <input
                                    type="number"
                                    name=""
                                    id="mobile-num"
                                    className="form-control"
                                    placeholder="Mobile"
                                  />
                                </div>
                                <div className="col-md-5">
                                  <input
                                    type="text"
                                    name=""
                                    id="Enquire_Emailid"
                                    className="form-control"
                                    placeholder="Email Id"
                                  />
                                </div>
                              </div>

                              <div className="row">
                              <div className="col-md-2"></div>
                              <div className="col-md-8">
                              <textarea
                                    type="text"
                                    name=""
                                    id="message"
                                    className="form-control"
                                    placeholder="Message"
                                  />
                              </div>
                              <div className="col-md-2"></div>

                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button className="enquiry-btn form-control">
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Footer;