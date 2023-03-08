import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from '../delay'
import users from '../../Data/users.json'
import { RootState } from "../../store/store";
import { User } from "../../Interfaces/UserInter";

interface UserState{
    users: User[];
    user: User | null;
    status: 'loading' | 'error' | 'fulfilled' | null
}

const initialState: UserState = { users: [], user: null, status: null}

export const fetchAllUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        return await delay(users) as User []
    }
)

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (id: number) => {
        const singleUser = users.find((element) => element.id === id)
        const user = await delay(singleUser)
        return user as User
    }

)
export const newUser = createAsyncThunk(
    "users/newUser",
    async (user: User) => {
        return await delay(user) as User
    }
)
export const editUser = createAsyncThunk(
    "user/editUser",
    async (user: User) => {
        const upgradeUser = users.find((element) => element.id === user.id)
        const updatedUser = await delay(upgradeUser)
        return updatedUser as User
    }
)
export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async (id: number) => {
        const delUser = users.find((element) => element.id === id)
        const user = await delay(delUser)
        return user as User
    }

)
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
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
export const selectAlltUsers = (state: RootState): User[] => state.users.users;
export const selectUser = (state: RootState): User | null => state.users.user;

export default usersSlice.reducer