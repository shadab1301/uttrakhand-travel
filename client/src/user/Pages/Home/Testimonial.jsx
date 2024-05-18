import React, { useEffect, useState } from "react";
import { fetchController } from "../../../utils/fetchController/fetchController";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonial = () => {
    const [testimonials, setTestimonial] = useState([]);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const GetTestimonial = async () => {
        try {
            const response = await fetchController('/testimonial', 'get');
            if (response?.status == 200) {
                setTestimonial(response?.data);
                // console.log(response?.data);
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
            <div className="">
                <section id="">
                    <div className="">
                        <div className="">
                            <Carousel responsive={responsive}
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={9000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                // deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {testimonials.map((val, index) => (
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

                            </Carousel>

                        </div>
                    </div>
                </section>
            </div>
        </section>
    </>);
}
export default Testimonial;