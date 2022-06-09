import { createSlice } from '@reduxjs/toolkit';
import { setData } from '../../app/utils';

const initialState = {
    currentUser: null,
    postsList: [],
    usersList: []
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
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
        setPostItem: (state, action) => {
            state.postsList.push(action.payload);
            setData('postsList', state.postsList);
        },
        getPosts: (state, action) => {
            state.postsList = action.payload;
        }
    }
});

export const {
    createUser,
    loginUser,
    getAllUser,
    getUser,
    clearUser,
    setPostItem,
    getPosts
} = counterSlice.actions;

export default counterSlice.reducer;