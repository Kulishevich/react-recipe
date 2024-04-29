import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchById = (userId) => (
    new Promise(resolve =>
        setTimeout(() => resolve({id: 1, name: 'Maksim'}), 1000)
))

export const getUserById = createAsyncThunk('user-by-id',
async (userId, thunkAPI) => {
    try{
        const response = await fetchById(userId)
        return response
    }
    catch(error){
        thunkAPI.rejectWithValue(error)
    }
})