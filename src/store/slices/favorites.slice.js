import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, actions) => {
            if(state.some(obj => obj.id === actions.payload.id)){
                let index = state.findIndex(obj => obj.id === actions.payload.id)
                if(index !== -1) state.splice(index, 1)
            } else {
                state.push(actions.payload)
            }
        }
    }
})

export const { actions, reducer } = favoritesSlice