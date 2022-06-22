import React, { useReducer } from 'react';
import Context, { user } from '../store/store';
import { reducer } from '../reducer/reducer';


const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, user)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
export default Provider;