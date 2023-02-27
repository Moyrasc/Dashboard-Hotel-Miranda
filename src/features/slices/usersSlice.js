import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from '../delay'
import users from '../../Data/users.json'

export const fetchAllUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        return await delay(users)
    }
)
export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (id) => {
        const singleUser = users.find((element) => element.id === id)
        const user = await delay(singleUser)
        return user
    }

)
export const newUser = createAsyncThunk(
    "users/newUser",
    async (user) => {
        return await delay(user)
    }
)
export const editUser = createAsyncThunk(
    "user/editUser",
    async (user) => {
        const upgradeUser = users.find((element) => element.id === user.id)
        const updatedUser = await delay(upgradeUser)
        return updatedUser
    }
)
export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async (id) => {
        const delUser = users.find((element) => element.id === id)
        const user = await delay(delUser)
        return user
    }

)
const initialState = {
    users: [],
    user: {},
    status: 'loading'

}
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.users = action.payload
            })
            .addCase(fetchAllUsers.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.user = action.payload
            })
            .addCase(fetchUser.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(newUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(newUser.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.user = action.payload
            })
            .addCase(newUser.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(editUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.user = action.payload
            })
            .addCase(editUser.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(deleteUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.user = action.payload
            })
            .addCase(deleteUser.rejected, (state) => {
                state.status = 'error'
            })
    }
})
export const selectAlltUsers = (state) => state.users.users;
export const selectUser = (state) => state.users.user;

export default usersSlice.reducer