export const destinationDetails= "destinationDetails";
export  const InitialState = [{
    "_id": "",
    "cityName": "",
    "cityImage": "",
    "isIncludeInNavbar": "",
    "isTopVisitPlace": "",
    "createdAt": "",
    "updatedAt": "",
},];


export const DestinationReducer = (state = InitialState, action) => {
    switch (action.type) {
      case destinationDetails:
        return [...action.payload ];
      default:
        return state;
    }
  };