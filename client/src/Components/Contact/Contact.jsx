import React from "react";
import { NavLink} from "react-router-dom";
export const Contact = () => {
    return (<>
<div class="bannercls">
    <img class="img-fluid" src="images/listing-banner.jpg" alt="" title="" border="0"/>
    <div class="container-fluid">
        <div class="banner-content">
            <h2 class="banner-title text-white wow bounceInLeft" data-wow-duration="3s"><NavLink className="banner-title text-white wow bounceInLeft" to="/">Home</NavLink>/Contact Us</h2>
            {/* <div class="banner-sub-title text-white wow bounceInLeft" data-wow-duration="3s">Home - India Packages</div>
            <div class="banner-smalltxt text-white wow bounceInLeft" data-wow-duration="3s">Tour and Travel Solutions</div> */}
        </div>
    </div>
</div>

<section class="bt-place">
    <div class="container-fluid">
        <div class="row">
            <div class="offset-1 col-md-10">
                <div class="bt-left">
                    <div class="fl-title text-center">
                    Contact Us Himadri Tour
                    </div>
                    <div class="fl-title blacktxt text-center">
                    We provide first class tour and travel services in Uttrakhand:
                    </div>
                    <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
            <div className="col"></div>
            <div className="col">
            <form class="trip-form" action="">
            <div class="news-letter">
                <h3 class="text-white text-center">Let us help you plan ypur trip</h3>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <select class="form-control" id="sal" name="sellist1">
                        <option>Mr.</option>
                        <option>Miss</option>
                        <option>Mrs.</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <input type="text" name="FName" id="FName" placeholder="First name" class="form-control"/>
                </div>
                <div class="col-md-5">
                    <input type="text" name="LName" id="LName" placeholder="Last name" class="form-control"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <select class="form-control" id="cntry-code" name="sellist1">
                        <option>+91</option>
                        <option>+92</option>
                        <option>+1684</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <input type="text" name="FName" id="mobile" placeholder="Mobile Number" class="form-control"/>
                </div>
                <div class="col-md-5">
                    <input type="text" name="LName" id="email" placeholder="E-mail Address" class="form-control"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <textarea name="" id="" cols="30" rows="5" placeholder="Any Special Request" class="form-control"></textarea>
                </div>
            </div>
          <div class="row">
            <div class="offset-8 col-lg-4 col-md-4 col-sm 12 col-12">
                <button class="reqst-btn float-right"  data-wow-duration="3s">Request a callback</button>
            </div>
          </div>
        </form>
            </div>
        </div>
    </div>
</section>
    </>);
}
