import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/postSlice';
import userReducer from '../features/user/userSlice';

export default configureStore({
    reducer: {
        post: postReducer,
        user: userReducer
    }
});