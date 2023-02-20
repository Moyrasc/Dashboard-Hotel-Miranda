import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from './delay.js'
import rooms from '../../Data/rooms.json'

export const fetchAllRooms = createAsyncThunk(
    "rooms/fetchRooms",
    async () => {
        return await delay(rooms)
    }
)
export const fetchRoom = createAsyncThunk(
    "room/fetchRoom",
    async (id) => {
        const singleRoom = rooms.find((element) => element.id === id)
        const room = await delay(singleRoom)
        return room
    }

)
export const newRoom = createAsyncThunk(
    "rooms/newRoom",
    async () => {
        return await delay(newRoom)
    }
)
export const editRoom = createAsyncThunk(
    "room/editRoom",
    async (id) => {
        const upgradeRoom = rooms.find((element) => element.id === id)
        const room = await delay(upgradeRoom)
        return room
    }
)
export const deleteRoom = createAsyncThunk(
    "room/deleteBooking",
    async (id) => {
        const delRoom = rooms.find((element) => element.id === id)
        const room = await delay(delRoom)
        return room
    }

)
const initialState = {
    rooms: [],
    room: {},
    status: 'loading'

}
export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllRooms.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllRooms.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(fetchAllRooms.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(fetchRoom.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(fetchRoom.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(newRoom.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(newRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(newRoom.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(editRoom.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(editRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(editRoom.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(deleteRoom.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(deleteRoom.rejected, (state) => {
                state.status = 'error'
            })
    }
})
export const selectAlltRooms = (state) => state.rooms.rooms;
export const selectRoom = (state) => state.rooms.room;

export default roomsSlice.reducer