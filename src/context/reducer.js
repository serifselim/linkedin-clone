import { setData } from './utils';

export const initialState = {
    currentUser: null,
    usersList: []
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    CREATE_USER: 'CREATE_USER',
    LOGIN_USER: 'LOGIN_USER',
    GET_USER: 'GET_USER'
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
        case actionTypes.GET_USER:
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return state;
    };
};

export default reducer;