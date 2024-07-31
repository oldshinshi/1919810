import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    
    },
    reducers: {
        mul: (state, action) => {
            state.value = action.payload.multiplier * action.payload.multiplicand * action.payload.multiplird;
        },
        increment:(state) => {
            state.value += 2
        },
        decrement:(state) => {
            state.value -= 2
        },
        incrementByAmount:(state,action) => {
            state.value += action.payload
        },
        reduceByAmount:(state,action) => {
            state.value -= action.payload
        },
        multiByAmount:(state,action) => {
            state.value *= action.payload
        },
        divideByAmount:(state,action) => {
            state.value /= action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { mul , increment ,decrement , incrementByAmount , reduceByAmount , multiByAmount , divideByAmount } = counterSlice.actions
export default counterSlice.reducer