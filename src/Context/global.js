import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState={
    transactions:[
        {
            id:1,
            text:"flowers",
            amount:-120
        },
        {
            id:2,
            text:"salary",
            amount:890
        }
    ]
}

//create context
export const GlobalContext=createContext(initialState);
//provider component
export const GlobalProvider = ( { children } ) =>{
    const [state, dispatch]=useReducer(AppReducer, initialState);
    console.log("state object in global component: "+state.transactions);
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
    console.log("transactions in global component: "+state.transactions)
    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    )
}