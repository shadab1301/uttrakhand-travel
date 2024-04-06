export const packagesDetails= "packagesDetails";
export  const InitialState = [{
    "_id": "",
    "title": "",
    "subTitle": "",
    "numbersOfDay": "",
    "description": "",
    "pkgImage": "",
    "createdAt": "",
    "updatedAt": " ",
},];


export const packagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case packagesDetails:
        return [...action.payload ];
      default:
        return state;
    }
  };