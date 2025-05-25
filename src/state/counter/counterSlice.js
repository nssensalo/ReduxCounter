import { createSlice} from "@reduxjs/toolkit";

// const initialState = {
//     value: 0,
// };

export const counterSlice = createSlice ({
    name: "counter",
    initialState:{
        value:0
    },
    reducers: {
        increment: state => { state.value += 1},
        decrement: state => { state.value -= 1},
        incrementByAmount: ( state, action) => {state.value += action.payload}
    },
})
//Actions
export const { increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer;//acces to a reducer through toolkit