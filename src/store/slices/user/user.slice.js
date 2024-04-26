import { createSlice } from "@reduxjs/toolkit";
import { getItemById } from "./user.actions";

export const userSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getItemById.pending, (state, action) => {
            
          }),
          builder.addCase(getItemById.fulfilled, (state, action) => {
            
          }),
          builder.addCase(getItemById.rejected, (state, action) => {
            
          })
    }
})