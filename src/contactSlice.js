

import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        selectedContact: {}
    },
    reducers: {
        update: state => {
            return state;
        }
    }
})

export const { update } = contactSlice.actions;

export default contactSlice.reducer