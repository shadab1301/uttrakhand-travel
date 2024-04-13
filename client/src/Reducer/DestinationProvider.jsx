import { createContext, useEffect, useReducer } from "react";
import { DestinationReducer, destinationDetails, InitialState } from "./DestinationReducer";
export const DestinationContext = createContext();
import { fetchController } from "../utils/fetchController/fetchController"
export const DestinationProvider = ({ children }) => {
        const [state, dispatch] = useReducer(DestinationReducer, InitialState);
    const DestinationLsit = async () => {
        try {
            const response = await fetchController("/destination");
            if (response?.data?.length > 0) {
               await  dispatch({ type: destinationDetails, payload: response.data });
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => { DestinationLsit(); }, []);

    console.log({stateFromDestinationProvider:state});
    return (<>
        <DestinationContext.Provider value={{ state, dispatch }}>
            {console.log({state_from_dotprovider:state})}
            {children}
        </DestinationContext.Provider>
    </>);
}