const initialState ={
    cname : "" ,
    calias : "",
    date: "",
    industry: "Information Technology/IT",
    accountManager: "Rajat",
    country: "USA",
    addr1: "",
    addr2: "",
    city: "",
    state: "Rajasthan",
    zipcode: "",
    phone: "",
}

const Company = (state = initialState, action) =>{
    switch(action.type) {
        case 'ADD_COMPANY_INFO': {
            console.log("Data received by company Reducer-->",action.data);
            return {...state, ...action.data };
        }

        default: {
            return state;
        }
    }
}

export default Company;