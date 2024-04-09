import React, { useState, useContext, useEffect } from "react";
import { NavLink,useParams } from "react-router-dom";
import detailImg from "../../../../public/images/details-banner.jpg";
import { RecomendedPkg } from "../RecomendedPkg/RecomendedPkg";
import { PackagesContext } from "../../../Reducer/PackagesProvider";
const Detail = () => {
    const { state: packagesDetails, dispatch } = useContext(PackagesContext);
    const { id } = useParams();
    // console.log(`This is  detail pkg id : ${id}`);
   const DetailPkg =  packagesDetails.filter((data)=>{ return data?._id==id; });
console.log(DetailPkg);
    return (
        <>
           
           <div className="bannercls">
                            <img className="img-fluid" src={DetailPkg[0]?.BannerImage} alt="" title="" border="0" />
                            <div className="container-fluid">
                                <div className="banner-content">
                                    <h2 className="banner-title text-white wow bounceInLeft">{DetailPkg[0]?.title}
                                    </h2>
                                    <div className="banner-sub-title text-white wow bounceInLeft">
                                    {DetailPkg[0]?.subTitle} <span>({DetailPkg[0]?.numbersOfDay}D,{DetailPkg[0]?.numbersOfDay-1}N)</span>
                                    </div>
                                    <div className="banner-smalltxt text-white wow bounceInLeft">Tour and Travel Solutions</div>
                                </div>
                            </div>
                        </div>

           
            <section className="detail-sec">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb" className=" breadcrumb-items">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Details</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="dt-tabbing-sec">
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="Trip_Overview">
                                        <div className="arrive-box">
                                            <div className="dt-title ">{DetailPkg[0]?.title} - {DetailPkg[0]?.subTitle} <span>({DetailPkg[0]?.numbersOfDay}D,{DetailPkg[0]?.numbersOfDay-1}N)</span></div>
                                            <div className="dt-price "><strong>Price Includes:</strong>
                                                <span>{DetailPkg[0]?.include}</span>
                                            </div>
                                            <div className="dt-box-1 shadow">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="dt-img ">
                                                            <img className="img-fluid" src={DetailPkg[0]?.pkgImage} alt="" title="" border="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <p>{DetailPkg[0]?.description}</p>
                                                        <div className="sharelist">
                                                            <ul className="share-btn">
                                                                <li><NavLink to="" data-toggle="modal" data-target="#Enquire" className="estimate-btn">Enquire</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="">
                                <RecomendedPkg/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Detail;