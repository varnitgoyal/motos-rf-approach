const initialState ={

}

const Product = (state = initialState, action) =>{
    switch(action.type) {
        case 'ENABLED_PRODUCTS': {
            console.log("Data received by product reducer-->", action.data);
            return {...state, ...action.data };
        }

        default: {
            return state;
        }
    }
}

export default Product;