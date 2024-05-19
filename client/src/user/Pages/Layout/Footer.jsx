import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import SErviceData from "../Service/ServiceData.json";
import { fetchController } from "../../../utils/fetchController/fetchController";

const Footer = () => {
  const [Feminine, SetFeminine] = useState("mr");
    const [Firstname, SetFirstname] = useState("");
    const [Lastname, SetLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, SetMessage] = useState("");
    const [Enquerty, setEnquerty] = useState("Just Reach Out");
    const [phone, setPhone] = useState("");
    const [Msg, setMsg] = useState({ color: "", txt: "" });

  const serviceD = SErviceData?.Service;

  const HandleChange = (e) =>{
    if (e.target.name === "feminine") {
      SetFeminine(e.target.value);

  }
  else if (e.target.name === "FName") {
    SetFirstname(e.target.value);

} else if (e.target.name === "LName") {
    SetLastname(e.target.value);
}
else if (e.target.name === "mobile") {
    setPhone(e.target.value);
}
else if (e.target.name === "email") {
    setEmail(e.target.value);
} 
else if (e.target.name === "message") {
    SetMessage(e.target.value);
}

  }

  // save enquery data

  const SubmitEnquery = async(e) =>{
    e.preventDefault();
    console.log("call button");
    if (Feminine == '' || Firstname == '' || Lastname == "" || phone == "" || Email == "" || Enquerty == "" || Message == "") {
      setMsg({ color: "red", txt: "All Fileds are required." });
  } else {

    try {
  setMsg({ color: '', txt: '' });
            let obj = {
                "feminine": Feminine,
                "first_name": Firstname,
                "last_name": Lastname,
                "mobile_number": phone,
                "email": Email,
                "enquery_type": Enquerty,
                "message": Message
            };
            console.log(obj);
            const response = await fetchController('/enquery', 'post', obj);
            console.log(response);
            if(response?.status ==201) {
                setMsg({ color: 'green', txt: response?.message  });
                setTimeout(() => {
                    setMsg({ color: '', txt: ''});
                    window.location.reload()
                }, 5000);
            }

    } catch(err){
      console.log(err);

    }
  }

  }
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
          </div>
          <div className="go-to-top">
            <NavLink id="back-to-top" to="#top">
              <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </footer>
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
                  <NavLink className="btn callIcon" to="tel:+91 9259078099">
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
                    to="https://wa.me/9259078099?text=Hii i want to book a package." target="_blank">
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
                    <div className="modal-title text-white">Send Enquiry-</div>
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
                                  id="feminine" name="feminine" onChange={HandleChange}
                                >
                                  <option value="mr" selected>Mr.</option>
                                  <option value="miss">Miss</option>
                                  <option value="mrs">Mrs.</option>
                                </select>
                              </div>
                              <div className="col-md-5">
                                <input
                                  type="text"
                                 name="FName" id="FName" placeholder="First name"
                                  className="form-control"
                                  onChange={HandleChange}
                                />
                              </div>
                              <div className="col-md-5">
                                <input
                                  type="text"
                                  name="LName" id="LName"
                                  className="form-control"
                                  placeholder="Last Name"
                                  onChange={HandleChange}
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-2">
                                <select
                                  className="form-control"
                                  id="enquire-mobile"
                                  name="countryCode" onChange={HandleChange} disabled
                                >
                                 <option value="91">91</option>
                                </select>
                              </div>
                              <div className="col-md-5">
                              <input type="text" name="mobile" id="mobile" placeholder="Mobile Number" className="form-control" onChange={HandleChange} />
                              </div>
                              <div className="col-md-5">
                              <input type="text" name="email" id="email" placeholder="E-mail Address" className="form-control" onChange={HandleChange} />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-2"></div>
                              <div className="col-md-8">
                              <textarea name="message" id="message" cols="30" rows="5" placeholder="Any Special Request" className="form-control" onChange={HandleChange} ></textarea>
                              </div>
                              <div className="col-md-2"></div>

                            </div>
                            <span style={{ color: Msg.color }}>{Msg.txt}</span>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="enquiry-btn form-control" onClick={SubmitEnquery}>
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