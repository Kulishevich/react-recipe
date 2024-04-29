import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from './slices/favorites.slice'
import userSlice from "./slices/user/user.slice";

export const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
        user: userSlice, //при взятии значения из useSelector state.(это значение берётся отсюда).(это значение из initialState)
    }
})