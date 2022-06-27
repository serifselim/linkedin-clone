import { createSlice } from '@reduxjs/toolkit';
import { setData } from '../../app/utils';

const initialState = {
    usersList: [],
    currentUser: null,
};

const reducers = {
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
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers
});

export const {
    createUser,
    loginUser,
    getAllUser,
    getUser,
    clearUser,
} = userSlice.actions;

export default userSlice.reducer;