import { createSlice } from '@reduxjs/toolkit';
import { setData } from '../../app/utils';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        postsList: [],
    },
    reducers: {
        setPostItem: (state, action) => {
            state.postsList.push(action.payload);
            setData('postsList', state.postsList);
        },
        getPosts: (state, action) => {
            state.postsList = action.payload;
        }
    }
});

export const { setPostItem, getPosts } = postSlice.actions;
export default postSlice.reducer;