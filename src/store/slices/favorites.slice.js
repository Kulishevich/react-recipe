import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            if(!state.items.some(obj => obj.id === action.payload.id)){
                state.items = [...state.items, action.payload]
            } else {
                const index = state.items.findIndex(obj => obj.id === action.payload.id)
                state.items.splice(index, 1)
            }
        }
    }
})

export const { actions } = favoriteSlice
export default favoriteSlice.reducer