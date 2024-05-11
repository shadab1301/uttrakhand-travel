import React, { useState, useEffect, useCallback, useRef } from "react";
import { NavLink, json } from "react-router-dom";
import axios from "axios";
import './Gallery.css';
// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";
import ImageModal from "./Components/ImageModal/ImageModal";
import DetailsModal from "./Components/detailsModal/DetailsModal";
export const GalleryAlbum = () => {
    const baseUrl = import.meta.env.VITE_REACT_APIBASE_URL;
    const API_LINK = baseUrl+"/gallery";
    const [images, setImages] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [download, setDownload] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [likes, setLikes] = useState("");
    const [userLink, setUserLink] = useState("");
    const [userName, setUserName] = useState("");
    const [views, setViews] = useState(0);
    const [description, setDescription] = useState(0);

    const getImages = () => {
        axios.get(API_LINK).then((response) => {
            setImages(response?.data?.data);
        });
    };
    const getDetails = async (id) => {
        const getImageDetail = images.filter((val) => val?._id == id);
        console.log(getImageDetail[0]);
        setDescription(getImageDetail[0]?.description);
        setUserName(getImageDetail[0]?.title);
        setPreviewImage(getImageDetail[0]?.image);
        setOpenModal(true);
    };
    useEffect(() => {
        getImages();
    }, []);

    return (<>


        {/* <section className="bt-place">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-1 col-md-10">
                        <div className="bt-left">
                            <div className="fl-title text-center">
                                <h3>Our  Gallery {JSON.stringify(import.meta.env.VITE_REACT_WEBNAME)}</h3>
                            </div>


                            <div className="images-div">
                                {images.map((value, index) => {
                                    return (
                                        <ImageModal
                                            image={value.image}
                                            title={value.title}
                                            id={value._id}
                                            onClick={getDetails}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                            {openModal && (
                                <DetailsModal
                                    image={previewImage}
                                    // download={download}
                                    closeModal={setOpenModal}
                                    title={userName}
                                    description={description}
                                />
                            )}



                        </div>
                    </div>

                </div>
            </div>
        </section> */}

<div className="bt-place-1">
      <div className="search-bar">
        <span className=" fl-title title">Gallery</span>
      </div>
      <div className="images-div">
      {  images.map((value, index) => {
              return (
                <ImageModal
                  image={value.image}
                  title={value.title}
                  id={value._id}
                  onClick={getDetails}
                  key={index}
                />
              );
            })}
      </div>
      {openModal && (
        <DetailsModal
          image={previewImage}
          // download={download}
          closeModal={setOpenModal}
          title={userName}
          description={description}
        />
      )}
    </div>
    </>);
}
