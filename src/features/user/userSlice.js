import { createSlice } from '@reduxjs/toolkit';
import { setData } from '../../app/utils';

export const userSlice = createSlice({
    name: 'counter',
    initialState: {
        usersList: [],
        currentUser: null,
    },
    reducers: {
        createUser: (state, action) => {
            state.usersList.push(action.payload);
            setData('usersList', state.usersList);
        },
        loginUser: (state, action) => {
            state.currentUser = action.payload;
            setData('currentUser', state.currentUser);
        },
        getAllUser: (state, action) => {
            state.usersList = action.payload;
        },
        getUser: (state, action) => {
            state.currentUser = action.payload;
        },
        clearUser: (state, action) => {
            setData('currentUser', null);
            state.currentUser = null;
        },
    }
});

export const {
    createUser,
    loginUser,
    getAllUser,
    getUser,
    clearUser,
} = userSlice.actions;

export default userSlice.reducer;