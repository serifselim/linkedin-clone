import { createSlice } from '@reduxjs/toolkit';
import { setData } from '../../app/utils';

export const userSlice = createSlice({
    name: 'counter',
    initialState: {
        usersList: [],
        currentUser: {},
    },
    reducers: {
        getAllUser: (state, { payload }) => void (state.usersList = payload),
        getUser: (state, { payload }) => void (state.currentUser = payload),
        createUser: (state, { payload }) => {
            state.usersList.push(payload);
            setData('usersList', state.usersList);
        },
        loginUser: (state, { payload }) => {
            state.currentUser = payload;
            setData('currentUser', state.currentUser);
        },

        clearUser: (state) => {
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