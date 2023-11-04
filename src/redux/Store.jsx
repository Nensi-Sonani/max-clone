import {applyMiddleware, combineReducers, legacy_createStore }from 'redux'
import thunk from 'redux-thunk'
import Reducer from './Reducer'
import { ProductReducer } from './productreducer/ProductReducer'
let combineReducer=combineReducers({
    Reducer,
    ProductReducer

})
export const Store=legacy_createStore(combineReducer,applyMiddleware(thunk))