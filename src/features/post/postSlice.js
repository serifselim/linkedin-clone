import { createSlice } from '@reduxjs/toolkit';
import { setData } from '../../app/utils';

const initialState = {
    postsList: [],
};

const reducers = {
    getPosts: (state, { payload }) => void (state.postsList = payload),
    setPostItem: (state, { payload }) => {
        state.postsList.push(payload);
        setData('postsList', state.postsList);
    }
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers
});

export const { setPostItem, getPosts } = postSlice.actions;
export default postSlice.reducer;