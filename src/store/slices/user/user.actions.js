import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId) => {
    new Promise(resolve => 
    setTimeout(() => resolve({id: 1, name: 'Max'}), 1000))
}
//разобрать этот промис
export const getItemById = 
createAsyncThunk('users-by-id',
async(userId, thunkApi) => {
    const responce = await fetchUserById(userId)
    return responce
})