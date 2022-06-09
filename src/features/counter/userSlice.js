import { createSlice } from '@reduxjs/toolkit';
import { setData } from '../../app/utils';

const initialState = {
    currentUser: null,
    postsList: [],
    usersList: []
};

const reducers = {
    getAllUser: (state, { payload }) => state.usersList = payload,
    getUser: (state, { payload }) => state.currentUser = payload,
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
    name: 'counter',
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