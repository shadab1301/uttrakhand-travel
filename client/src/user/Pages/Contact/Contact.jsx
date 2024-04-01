import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { fetchController } from "../../../utils/fetchController/fetchController";
export const Contact = () => {
    const [Address,setAddress] = useState([]);
    const [Feminine, SetFeminine] = useState("mr");
    const [Firstname, SetFirstname] = useState("");
    const [Lastname, SetLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, SetMessage] = useState("");
    const [Enquerty, setEnquerty] = useState("");
    const [phone, setPhone] = useState("");
    const [Msg, setMsg] = useState({ color: "", txt: "" });

useEffect(  ()=>{
    GetAddress();
},[]);


const GetAddress = async() =>{
    const response = await fetchController('address', 'get');
    if(response?.status ==200) {
        setAddress(response?.data);
    }
}
    const HandleChange = (e) => {
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
        } else if (e.target.name === "enquery_type") {
            setEnquerty(e.target.value);
        }
        else if (e.target.name === "message") {
            SetMessage(e.target.value);
        }


    }
    onsubmit = async (e) => {
        e.preventDefault();
        debugger;

        if (Feminine == '' || Firstname == '' || Lastname == "" || phone == "" || Email == "" || Enquerty == "" || Message == "") {
            setMsg({ color: "red", txt: "All Fileds are required." });
        } else {
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
            const response = await fetchController('enquery', 'post', obj);
            console.log(response);
            if(response?.status ==201) {
                setMsg({ color: 'green', txt: response?.message  });
                setTimeout(() => {
                    setMsg({ color: '', txt: ''});
                }, 5000);
            }
        }
      
    }

    return (<>
        <div className="bannercls">
            <img className="img-fluid" src="images/listing-banner.jpg" alt="" title="" border="0" />
            <div className="container-fluid">
                <div className="banner-content">
                    <h2 className="banner-title text-white wow bounceInLeft" data-wow-duration="3s"><NavLink className="banner-title text-white wow bounceInLeft" to="/">Home</NavLink>/Contact Us</h2>

                </div>
            </div>
        </div>
        <section className="bt-place">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-1 col-md-10">
                        <div className="bt-left">
                            <div className="fl-title text-center">
                                <h3>Contact Us {JSON.stringify(import.meta.env.VITE_REACT_WEBNAME)}</h3>
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
                    <div className="col">
                        <div className="google-map-code">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6900.3866899434315!2d78.59533314055687!3d30.145887777278492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909090d5b91180d%3A0x5d7916d17f992317!2sDevprayag%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1709788945474!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                frameborder="0"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                            />
                        </div>
                    </div>

                    <div className="col">

                        <div className="enquiry-form">
                            <div className="Contact-enquiry-header">
                                <h5 className=" ">Contact Details</h5>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <span><i class="fa fa-home" style={{ fontSsize: "36px" }}></i>&nbsp;</span>
                                        {Address[0]?.address}
                                    </tr>
                                    <tr><span><i class="fa fa-phone" style={{ fontSsize: "36px" }}></i>&nbsp;</span> {Address[0]?.primary_number}, {Address[0]?.alternate_number}</tr>
                                    <tr><span><i class="fa fa-envelope" style={{ fontSsize: "36px" }}></i>&nbsp;</span>{Address[0]?.email}</tr>
                                    <tr><span><i class="fa fa-globe" style={{ fontSsize: "36px" }}></i>&nbsp;</span>{Address[0]?.WebUrl}</tr>
                                </table>
                            </div>
                        </div>
                        <div className="enquiry-form">
                            <form className="trip-form" action="">
                                <div className="Contact-enquiry-header">
                                    <h5 className=" ">Let us help you plan your trip</h5>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <select className="form-control" id="feminine" name="feminine" onChange={HandleChange}>
                                            <option value="mr" selected>Mr.</option>
                                            <option value="miss">Miss</option>
                                            <option value="mrs">Mrs.</option>
                                        </select>
                                    </div>
                                    <div className="col-md-5">
                                        <input type="text" name="FName" id="FName" placeholder="First name" className="form-control" onChange={HandleChange} />
                                    </div>
                                    <div className="col-md-5">
                                        <input type="text" name="LName" id="LName" placeholder="Last name" className="form-control" onChange={HandleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <select className="form-control" id="countryCode" name="countryCode" onChange={HandleChange} disabled>
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
                                    <div className="col-md-4">
                                        <select className="form-control" id="enquery_type" name="enquery_type" onChange={HandleChange}>
                                            <option value="">--Enquery type--</option>
                                            <option value="Just Reach Out">Just Reach Out</option>
                                            <option value="Package Booking">Package Booking</option>
                                            <option value="Hotel Booking" >Hotel Booking</option>
                                            <option value="Car and Taxi Service">Car & Taxi Service</option>
                                            <option value="Rafting and Camping">Rafting and Camping</option>
                                        </select>
                                    </div>
                                    <div className="col-md-8">
                                        <textarea name="message" id="message" cols="30" rows="5" placeholder="Any Special Request" className="form-control" onChange={HandleChange} ></textarea>
                                    </div>
                                </div>
                                <span style={{ color: Msg.color }}>{Msg.txt}</span>
                                <div className="row">
                                    <div className="offset-8 col-lg-4 col-md-4 col-sm 12 col-12">
                                        <button className="reqst-btn float-right" >Request a callback</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>);
}
