import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { PackagesContext } from "../../../Reducer/PackagesProvider";

export const RecomendedPkg = () => {
    const { state: packagesDetails, dispatch } = useContext(PackagesContext);
    const RecomendedPkg = packagesDetails.filter((data) => { return data?.isRecommendPackages == 1; });

    return (<>

        <div className="filter-sec shadow">
            <div className="filter-title">
                <div className="fl-title text-center">
                    Our Recommended Package
                </div>
            </div>
            <hr />

            {RecomendedPkg?.map((val, index) => (<>
                <div className="fl-checkbox">
                    <div className="fl-title">
                        <h6>
                            <NavLink to={"/detail/" + val?._id} >
                                {val?.title} -  {val?.numbersOfDay - 1} N / {val?.numbersOfDay} D  </NavLink>
                        </h6>
                    </div>
                </div>
            </>))}
        </div>
    </>);

}