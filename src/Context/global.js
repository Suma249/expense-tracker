import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState={
    transactions:[]
}

//create context
export const globalContext=createContext(initialState);
//provider component
export const GlobalProvider = ( { children } ) =>{
    const [state, dispatch]=useReducer(AppReducer, initialState);

    //actions
    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }
    function addTransaction(transactions){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transactions
        })
    }
    return(
        <globalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
        {children}
        </globalContext.Provider>
    )
}