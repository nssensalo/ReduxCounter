import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.js";

export const store = configureStore({
    reducer: {
        counter:counterReducer,//now it in the store and accessable everywhere
    },
});

//const currentState = store.getState();
// console.log(currentState.user.isLoggedIn)
//const dispatch = store.dispatch()