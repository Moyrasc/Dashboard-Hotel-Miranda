import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from '../delay'
import contacts from '../../Data/contacts.json'
import { RootState } from "../../store/store";
import { Contact } from "../../Interfaces/ContactInter";

interface ContactsState {
    contacts: Contact[];
    contact: Contact | null;
    status: 'loading' | 'error' | 'fulfilled' | null
}
const initialState: ContactsState = { contacts:[], contact: null, status: null}

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        return await delay(contacts) as Contact[]
    }
)
export const fetchContact = createAsyncThunk(
    "contact/fetchContact",
    async (id: number) => {
        const singleContact = contacts.find((element) => element.id === id)
        const contact = await delay(singleContact)
        return contact as Contact
    }

)
export const newContact = createAsyncThunk(
    "contacts/newContact",
    async (contact: Contact) => {
        return await delay(contact) as Contact
    }
)
export const editContact = createAsyncThunk(
    "contact/editContact",
    async (contact: Contact) => {
        const upgradeContact = contacts.find((element) => element.id === contact.id)
        const updatedContact = await delay(upgradeContact)
        return updatedContact as Contact
    }
)
export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (id: number) => {
        const delContact = contacts.find((element) => element.id === id)
        const contact = await delay(delContact)
        return contact as Contact
    }

)
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllContacts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllContacts.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.contacts = action.payload
            })
            .addCase(fetchAllContacts.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(fetchContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchContact.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.contact = action.payload
            })
            .addCase(fetchContact.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(newContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(newContact.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.contact = action.payload
            })
            .addCase(newContact.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(editContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(editContact.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.contact = action.payload
            })
            .addCase(editContact.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(deleteContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.contact = action.payload
            })
            .addCase(deleteContact.rejected, (state) => {
                state.status = 'error'
            })
    }
})
export const selectAllContacts = (state: RootState): Contact[] => state.contacts.contacts;
export const selectContact = (state: RootState): Contact | null => state.contacts.contact;

export default contactsSlice.reducer