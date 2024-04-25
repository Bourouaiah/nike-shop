import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myItems: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddItem: (state, action) => {
            const itemIndex = state.myItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex === -1) {
                const temp = { ...action.payload, Quantity: 1 };
                state.myItems.push(temp);
            }
            else {
                state.myItems[itemIndex].Quantity += 1;
            }

            localStorage.setItem("items", JSON.stringify(state.myItems))

        },
        RemoveItem: (state, action) => {
            state.myItems = state.myItems.filter(item => item.id !== action.payload.id)
            localStorage.setItem("items", JSON.stringify(state.myItems))
        },
        IncreaseValue: (state, action) => {
            const itemIndex = state.myItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.myItems[itemIndex].Quantity += 1;
            localStorage.setItem("items", JSON.stringify(state.myItems))
        },
        DecreaseValue: (state, action) => {
            const itemIndex = state.myItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.myItems[itemIndex].Quantity -= 1;
            if (state.myItems[itemIndex].Quantity <= 0) {
                state.myItems = state.myItems.filter(item => item.id !== state.myItems[itemIndex].id)
            }
            localStorage.setItem("items", JSON.stringify(state.myItems))
        },
        RemoveItems: (state, action) => {
            state.myItems = [];
            localStorage.removeItem("items")
        },
    },
})

export const { AddItem, RemoveItems, RemoveItem, IncreaseValue, DecreaseValue } = cartSlice.actions

export default cartSlice.reducer