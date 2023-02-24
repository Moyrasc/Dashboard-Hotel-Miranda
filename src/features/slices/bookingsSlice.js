import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from '../delay'
import bookings from '../../Data/bookings.json'

export const fetchAllBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        return await delay(bookings)
    }
)
export const fetchBooking = createAsyncThunk(
    "booking/fetchBooking",
    async (id) => {
        const singleBooking = bookings.find((element) => element.id === Number(id))
        const booking = await delay(singleBooking)
        return booking
    }

)
export const newBooking = createAsyncThunk(
    "bookings/newBooking",
    async (room) => {
        return await delay(room)
    }
)
export const editBooking = createAsyncThunk(
    "booking/editBooking",
    async (id) => {
        const upgradeBooking = bookings.find((element) => element.id === id)
        const booking = await delay(upgradeBooking)
        return booking
    }
)
export const deleteBooking = createAsyncThunk(
    "booking/deleteBooking",
    async (id) => {
        const delBooking = bookings.find((element) => element.id === id)
        const booking = await delay(delBooking)
        return booking
    }

)
const initialState = {
    bookings: [],
    booking: {},
    status: 'loading'

}
export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBookings.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllBookings.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.bookings = action.payload
            })
            .addCase(fetchAllBookings.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(fetchBooking.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.booking = action.payload
            })
            .addCase(fetchBooking.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(newBooking.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(newBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.booking = action.payload
            })
            .addCase(newBooking.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(editBooking.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(editBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.booking = action.payload
            })
            .addCase(editBooking.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(deleteBooking.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.booking = action.payload
            })
            .addCase(deleteBooking.rejected, (state) => {
                state.status = 'error'
            })
    }
})
export const selectAllBooking = (state) => state.bookings.bookings;
export const selectBooking = (state) => state.bookings.booking;

export default bookingsSlice.reducer