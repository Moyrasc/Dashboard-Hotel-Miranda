import { configureStore } from "@reduxjs/toolkit";
import bookingsSliceReducer from "../features/slices/bookingsSlice";
import contactsSliceReducer from "../features/slices/contactsSlice";
import roomsSliceReducer from "../features/slices/roomsSlice";
import usersSliceReducer from "../features/slices/usersSlice";


export const store = configureStore({
    reducer: {
        bookings: bookingsSliceReducer,
        contacts: contactsSliceReducer,
        rooms: roomsSliceReducer,
        users: usersSliceReducer
    }
})

