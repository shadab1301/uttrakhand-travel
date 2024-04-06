import React, { useEffect, useState } from "react";
import { fetchController } from "../../../utils/fetchController/fetchController";
const Testimonial = () => {
    const [testimonials, setTestimonial] = useState([]);
    const GetTestimonial = async () => {
        try {
            const response = await fetchController('/testimonial', 'get');
            if (response?.status == 200) {
                setTestimonial(response?.data);
                console.log(response?.data);
            }
        } catch (err) {
            console.log("Error while loading testimonials.");
            console.log(err);
        }
    }
    useEffect(() => {
        GetTestimonial();
    }, []);
    return (<>
        <section className="testimonial">
            <h4 className="text-white text-center">Clients Testimonials</h4>
            <div className="container">
                <section id="testimonial">
                    <div className="">
                        <div className="loop owl-carousel owl-theme">
                            {testimonials.map((val,index)=>(
                                <div className="item wow zoomIn" data-wow-duration="3s">
                                <div className="testimonial-box">
                                    <div className="client-img-box">
                                        <img className="img-fluid client-img" src={val?.image} alt="" title="" border="0" />
                                    </div>
                                    <p className="text-white text-center">{val?.description}</p>
                                    <div className="clientname text-white text-center">{val?.customer_name}
                                    </div>
                                    {/* <div className="client-sub text-white text-center">{val?.customer_name}</div> */}
                                </div>
                            </div>
                            ))}  
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </>);
}
export default Testimonial;