import React, { createContext, useReducer } from 'react';
import initialState from '../Dashboard';
import reducer from '../reducers/countriesReducers';

export const MyContext = createContext({});

export const Provider = ({children}) => {

    const [countriesState, countriesDispatch] = useReducer(reducer, initialState)
    return (
         <MyContext.Provider value={{ countriesState, countriesDispatch}}>
            {children}
        </MyContext.Provider >
    )
}
