import React from "react";
import { NavLink, json } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
export const GalleryAlbum = () => {

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (<>


        <section className="bt-place">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-1 col-md-10">
                        <div className="bt-left">
                            <div className="fl-title text-center">
                                <h3>Our  Gallery {JSON.stringify(import.meta.env.VITE_REACT_WEBNAME)}</h3>
                            </div>



                            <ImageGallery items={images} thumbnailPosition="left" showBullets useWindowKeyDown
                            />

                        </div>
                    </div>

                </div>


            </div>
        </section>
    </>);
}
