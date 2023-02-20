import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from './delay.js'
import contacts from '../../Data/contacts.json'

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        return await delay(contacts)
    }
)
export const fetchContact = createAsyncThunk(
    "contact/fetchContact",
    async (id) => {
        const singleContact = contacts.find((element) => element.id === id)
        const contact = await delay(singleContact)
        return contact
    }

)
export const newContact = createAsyncThunk(
    "contacts/newContact",
    async () => {
        return await delay(newContact)
    }
)
export const editContact = createAsyncThunk(
    "contact/editContact",
    async (id) => {
        const upgradeContact = contacts.find((element) => element.id === id)
        const contact = await delay(upgradeContact)
        return contact
    }
)
export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (id) => {
        const delContact = contacts.find((element) => element.id === id)
        const contact = await delay(delContact)
        return contact
    }

)
const initialState = {
    contacts: [],
    contact: {},
    status: 'loading'

}
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllContacts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllContacts.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(fetchAllContacts.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(fetchContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchContact.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(fetchContact.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(newContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(newContact.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(newContact.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(editContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(editContact.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(editContact.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(deleteContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.results = action.payload
            })
            .addCase(deleteContact.rejected, (state) => {
                state.status = 'error'
            })
    }
})
export const selectAlltContacts = (state) => state.contacts.contacts;
export const selectContact = (state) => state.contacts.contactt;

export default contactsSlice.reducer