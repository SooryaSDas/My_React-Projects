import {configureStore} from "@reduxjs/toolkit";
import appsSlice from "./appsSlice";

const stores = configureStore({
    reducer :{
        app : appsSlice,

    }
})

export default stores;