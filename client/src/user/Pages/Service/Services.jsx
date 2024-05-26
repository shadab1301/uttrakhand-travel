import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SErviceData from "./ServiceData.json";
const Services = () => {
    const serviceD = SErviceData?.Service;
    // const[serviceD,setService] = useState(SErviceData?.Service);
    return (
        <>
<section className="proj-themes">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="title-main">
                    <h2 className=" wow zoomIn" data-wow-duration="3s"><strong>Our</strong> <span>Services</span> </h2>
                    <h5>We provides best services in Rishikesh, our services are as follows:</h5>
                </div>
            </div>
        </div>
        <div className="row">
            {serviceD.map((val,ind)=><>
                <div className="col-md-3 col-sm-8" key={ind}>
                <div className="theme-box wow zoomIn"  data-wow-duration="3s">
                    <div className="th-1" key={ind}>
                        <img className="img-fluid theme-img" src={val?.icon} width={80} height={50} alt="" title="" border="0"/>
                    </div>
                    <div className="theme-content" key={ind}>
                            <div className="theme-title2">{val?.title}</div>
                        {/* <span className="add-icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        </span> */}
                    </div>
                </div>
            </div>
            </>)}
           
    

        </div>
    </div>
</section>
        </>
    );
}
export default Services;