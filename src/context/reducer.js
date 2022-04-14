import { createUser } from './utils';

export const initialState = {
    currentUser: null,
    usersList: []
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    CREATE_USER: 'CREATE_USER'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            createUser(state, action.user);
            return { ...state };
        default:
            return state;
    };
};

export default reducer;