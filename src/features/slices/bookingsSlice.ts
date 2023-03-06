import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from '../delay'
import bookings from '../../Data/bookings.json'
import { RootState } from "../../store/store";

export interface Booking {
    id: number;
    guest: string;
    orderDate: string;
    checkin: string;
    checkout: string;
    roomId: number;
    price: number;
    specialRequest: string;
    amenities: string[];
    typeRoom: string;
    description: string;
    photo: string;
    state: string

}
interface BookingsState {
    bookings: Booking[];
    booking: Booking | null;
    status: 'loading' | 'error' | 'fulfilled' | null
}
const initialState: BookingsState = { bookings:[],booking: null, status: null }

export const fetchAllBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        return await delay(bookings) as Booking[]
    }
)
export const fetchBooking = createAsyncThunk(
    "booking/fetchBooking",
    async (id: number) => {
        const singleBooking = bookings.find((element) => element.id === Number(id))
        const booking = await delay(singleBooking)
        return booking as Booking
    }

)
export const newBooking = createAsyncThunk(
    "bookings/newBooking",
    async (booking: Booking) => {
        return await delay(booking) as Booking
    }
)
export const editBooking = createAsyncThunk(
    "booking/editBooking",
    async (booking: Booking) => {
        const upgradeBooking = bookings.find((element) => element.id === booking.id)
        const updatedBooking = await delay(upgradeBooking)
        return updatedBooking as Booking
    }
)
export const deleteBooking = createAsyncThunk(
    "booking/deleteBooking",
    async (id: number) => {
        const delBooking = bookings.find((element) => element.id === id)
        const booking = await delay(delBooking)
        return booking as Booking
    }

)

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
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
export const selectAllBooking = (state: RootState): Booking[] => state.bookings.bookings;
export const selectBooking = (state: RootState): Booking | null => state.bookings.booking;

export default bookingsSlice.reducer