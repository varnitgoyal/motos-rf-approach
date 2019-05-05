import { combineReducers } from 'redux'
import Company from './Company'
import Product from './Product'
import adminReducer from './adminReducer'

const rootReducer=combineReducers({
    Company,
    Product,
    adminReducer
})
export default rootReducer;