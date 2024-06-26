import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import Testimonial from "./Testimonial";
import Services from "../Service/Services";
import { Banner } from "../../Layout/Banner";
import { PackagesContext } from "../../../Reducer/PackagesProvider";
import { DestinationContext } from "../../../Reducer/DestinationProvider";
const Home = () => {

  const { state: packagesDetails, dispatch } = useContext(PackagesContext);
  const { state: stateDestination, dispatch: dispatchDestination } = useContext(DestinationContext);
  const TopPkgs = packagesDetails.filter((data)=>{ return data?.isTopPackages==1 || data?.isTopPackages==true || data?.isTopPackages=="true" || data?.isTopPackages=='1'; });
 
  const TopVisitPlace =  stateDestination.filter((data)=>{ return data?.isTopVisitPlace==1 || data?.isTopVisitPlace==true  ||  data?.isTopVisitPlace=="true" ||data?.isTopVisitPlace=="1"; });
  return (
    <>
     {/* <Banner/> */}

      {/* <section className="hot-deals">
        <section className="search-form-box"></section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <NavLink
                className="readmore wow zoomIn"
                to=""
                data-wow-duration="3s"
              >
                See More Promo
              </NavLink>
            </div>
          </div>
          
        </div>
      </section> */}

      <section className="best-places">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-main">
                <h2>
                  <strong>
                    Recommended <span>Best Tourist Places</span> in Uttarakhand
                    to visit{" "}
                  </strong>{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {TopVisitPlace?.map((val,index)=>(
              <>
                <div className="col-md-3 col-sm-6">
              <div className="theme-box shadow best-places-box ">
                <div className="bestplace-img">
                  <img
                    className="img-fluid"
                    src={val?.cityImage}
                    alt=""
                    title=""
                    border="0"
                  />
                </div>
                <div className="theme-content">
                  <ul>
                    <li>
                      <div className="theme-title">{val?.cityName}</div>
                    </li>
                  </ul>
                  {/* <p>3Days, 4 NIghts </p> */}
                  {/* <p className="best-places-content"> <span className="blackcolor">Included:</span> Flight Facility , 5 Star HotelSightseeing , Transfers , Meals</p> */}
                  <ul className="rating-sec">
                    {/* <li>
                                <span className="st-txt">Starting from</span>
                                <br/><span className="st-price"><i className="fa fa-rupee"></i>1180</span>
                            </li> */}
                    <li>
                      <NavLink to={"/list/"+val?._id} className="dt-view">
                        VIEW MORE
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              </>
            ))}
          


          </div>
        </div>
        <NavLink className="readmore-right" to="/list/all">
          See All
        </NavLink>
        {/* </div> */}
      </section>

      <section className="best-places">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-main">
                <h2>
                  <span>Top</span> Recommended <span>Travel Package </span>in
                  Uttarakhand to visit{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">

            {TopPkgs?.map((val,index)=>(
              <>
               <div className="col-md-3 col-sm-6">
              <div className="theme-box shadow best-places-box">
                <div className="bestplace-img">
                  <img
                    className="img-fluid"
                    src={val?.pkgImage} 
                    alt=""
                    title=""
                    border="0"
                  />
                </div>
                <div className="theme-content">
                  <ul>
                    <li>
                      <div className="theme-title">
                       {val?.title}
                      </div>
                    </li>
                  </ul>
                  <p>{val?.numbersOfDay}Days, {val?.numbersOfDay-1}NIghts</p>
                  <p className="best-places-content">
                    <span className="blackcolor">Included:</span>{val?.include}
                    {/* <span className="blackcolor">Included:</span> Flight
                    Facility , 5 Star HotelSightseeing , Transfers , Meals */}
                  </p>
                  <ul className="rating-sec">
                    <li>
                      <span className="st-txt">Price:</span>
                      <br />
                      <span className="st-price">
                        {/* <i className="fa fa-rupee"></i> */}
                        On Request
                      </span>
                    </li>
                    <li>
                      <NavLink to={"/detail/"+val?._id} className="dt-view">
                        VIEW MORE
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              </>
            ))}
          </div>
          <NavLink className="readmore-right" to="/list/all">
            See All
          </NavLink>
        </div>
        {/* </div> */}
      </section>

      <Services />
      <Testimonial />
    </>
  );
};
export default Home;
