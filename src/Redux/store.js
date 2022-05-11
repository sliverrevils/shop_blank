
import {configureStore} from '@reduxjs/toolkit'
import baseAppReducer from './Reducers/baseReducer';
import productsReducer from './Reducers/productsReducer';


const stringMiddleware=()=>(dispatch)=>(action)=>{
    if(typeof action==='string')
    return dispatch({type:action});
    else
    return dispatch(action);
}

const store=configureStore({
    reducer:{baseAppReducer, productsReducer},
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(stringMiddleware),
    devTools:process.env.NODE_ENV!=='production'
})

export default store;
