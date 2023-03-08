import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from '../delay'
import rooms from '../../Data/rooms.json'
import { RootState } from "../../store/store";
import { Room } from "../../Interfaces/RoomInter";

interface RoomState {
    rooms: Room[];
    room: Room | null;
    status: 'loading' | 'error' | 'fulfilled' | null
}
const initialState: RoomState = {rooms:[], room: null, status: null}
export const fetchAllRooms = createAsyncThunk(
    "rooms/fetchRooms",
    async () => {
        return await delay(rooms) as Room[]
    }
)
export const fetchRoom = createAsyncThunk(
    "room/fetchRoom",
    async (id: number) => {
        const singleRoom = rooms.find((element) => element.id === Number(id))
        const room = await delay(singleRoom)
        return room as Room
    }

)
export const newRoom = createAsyncThunk(
    "rooms/newRoom",
    async (room: Room) => {
        console.log(room)
        return await delay(room) as Room

    }
)
export const editRoom = createAsyncThunk(
    "room/editRoom",
    async (room: Room) => {
        const upgradeRoom = rooms.find((element) => element.id === room.id)
        const updatedRoom = await delay(upgradeRoom)
        return updatedRoom as Room
    }
)
export const deleteRoom = createAsyncThunk(
    "room/deleteRoom",
    async (id: number) => {
        const delRoom = rooms.find((element) => element.id === id)
        const room = await delay(delRoom)
        return room as Room
    }

)
export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllRooms.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllRooms.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.rooms = action.payload
            })
            .addCase(fetchAllRooms.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(fetchRoom.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.room = action.payload
            })
            .addCase(fetchRoom.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(newRoom.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(newRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                // state.room = action.payload
                state.rooms.push(action.payload)
            })
            .addCase(newRoom.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(editRoom.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(editRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.room = action.payload
            })
            .addCase(editRoom.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(deleteRoom.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.room = action.payload
            })
            .addCase(deleteRoom.rejected, (state) => {
                state.status = 'error'
            })
    }
})
export const selectAllRooms = (state: RootState): Room[] => state.rooms.rooms;
export const selectRoom = (state: RootState): Room | null => state.rooms.room;

export default roomsSlice.reducer