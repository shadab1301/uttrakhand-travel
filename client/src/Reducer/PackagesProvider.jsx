import { createContext,useEffect,useReducer} from "react";
import { packagesReducer,packagesDetails,InitialState } from "./PackageReducer";
export const PackagesContext = createContext();
import {fetchController} from "../utils/fetchController/fetchController"
export const PackagesProvider = ({children}) =>{
    const  PackageLsit = async() =>{
        try{
            const response =   await  fetchController("/package");
            if(response?.data?.length >0) {
               await dispatch({ type: packagesDetails, payload: response.data });
           }
        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{ PackageLsit(); },[]);
    const [state, dispatch] = useReducer(packagesReducer, InitialState);
    return (<>
   <PackagesContext.Provider value={{ state, dispatch }}>
      {children}
    </PackagesContext.Provider>
    </>);
}