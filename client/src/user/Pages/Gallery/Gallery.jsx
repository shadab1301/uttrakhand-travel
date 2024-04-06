import React from "react";
import { NavLink, json } from "react-router-dom";
export const Gallery = () => {
    return (<>
       

        <section className="bt-place">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-1 col-md-10">
                        <div className="bt-left">
                            <div className="fl-title text-center">
                                <h3>Our  Gallery {JSON.stringify(import.meta.env.VITE_REACT_WEBNAME)}</h3>
                            </div>





                        </div>
                    </div>

                </div>


            </div>
        </section>
    </>);
}
