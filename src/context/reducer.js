import { setData } from './utils';

export const initialState = {
    currentUser: null,
    postsList: [],
    usersList: []
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    CREATE_USER: 'CREATE_USER',
    LOGIN_USER: 'LOGIN_USER',
    GET_USER: 'GET_USER',
    GET_ALL_USERS: 'GET_ALL_USERS',
    CLEAR_USER: 'CLEAR_USER',
    SET_POST_ITEM: 'SET_FEED_ITEM',
    GET_POSTS: 'GET_POSTS'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            state.usersList.push(action.user);
            setData('usersList', state.usersList);
            return { ...state };
        case actionTypes.LOGIN_USER:
            state.currentUser = action.user;
            setData('currentUser', state.currentUser);
            return {
                ...state,
            }
        case actionTypes.GET_ALL_USERS:
            return {
                ...state,
                usersList: action.users
            }
        case actionTypes.GET_USER:
            return {
                ...state,
                currentUser: action.user
            }
        case actionTypes.CLEAR_USER:
            setData('currentUser', null);
            return {
                ...state,
                currentUser: null
            }
        case actionTypes.SET_POST_ITEM:
            state.postsList.push(action.post);
            setData('postsList', state.postsList);
            return {
                ...state
            };
        case actionTypes.GET_POSTS:
            return {
                ...state,
                postsList: action.postsList
            }
        default:
            return state;
    };
};

export default reducer;