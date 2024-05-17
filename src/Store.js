
import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './contactSlice';
export default configureStore({
    reducer: {
        selectedContact: contactReducer
    },
})