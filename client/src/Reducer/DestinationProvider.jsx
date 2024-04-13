import { createContext, useEffect, useReducer } from "react";
import { DestinationReducer, destinationDetails, InitialState } from "./DestinationReducer";
export const DestinationContext = createContext();
import { fetchController } from "../utils/fetchController/fetchController"
export const DestinationProvider = ({ children }) => {
    const DestinationLsit = async () => {
        try {
            const response = await fetchController("/destination");
            // console.log("destinationP",response);
            if (response?.data?.length > 0) {
                dispatch({ type: destinationDetails, payload: response.data });
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => { DestinationLsit(); }, []);
    const [state, dispatch] = useReducer(DestinationReducer, InitialState);
    return (<>
        <DestinationContext.Provider value={{ state, dispatch }}>
            {children}
        </DestinationContext.Provider>
    </>);
}