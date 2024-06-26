import axios from "axios";
import { useNavigate } from "react-router-dom";

export const fetchController = async (endPoint, method, body, isAuth=false) => {
  try {
  // const BaseUrl = "http://localhost:5000/api/v1";
  const BaseUrl ="https://api.devbhoomitouroprator.in/api/v1";
    const accessToken = localStorage.getItem("token");
    const fetchOptions = isAuth
      ? {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      : {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
        };

    if (body) {
      fetchOptions.data = body;
    }
const API_URL = BaseUrl+endPoint;
    const hitFetch = await axios(API_URL, fetchOptions);

    const data = hitFetch.data;
    return data;
  } catch (error) {
    const errorMessage = error?.response
      ? error?.response?.data.detail
      : "Please try again";
    console.log(errorMessage);
    // if (errorMessage === "Signature has expired") {
    //   for (const key in localStorage) {
    //     if (key !== "visitedPages") {
    //       localStorage.removeItem(key);
    //     }
    //   }
    //   window.location.href = "/";
    // } else {
    //   throw errorMessage;
    // }
  }
};
