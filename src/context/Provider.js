import React, { useContext, createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

const Context = createContext();

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider >
    )

}

export const useStateValue = () => useContext(Context);

export default Provider;
