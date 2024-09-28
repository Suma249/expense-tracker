import React, { useContext, useState } from 'react'
import { globalContext} from '../Context/global';

function AddNewTransaction() {
    const [text,setText]=useState('');
    const [amount, setAmount]=useState('');
    const {addTransaction} = useContext(globalContext);

    const onSubmit = (e) =>{
        e.preventDefault();
        const transaction ={
            id: Math.floor(Math.random()*10000),
            text,
            amount:+amount
        }
    addTransaction(transaction)
    }
  return (
    <div>
        <h3>Add New Transaction</h3>
        <form id='form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type="text" value={text} onChange={ (e) => setText(e.target.value)}  placeholder='enter text'/>
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amount<br/>(negative - expense, positive-income)</label>
                <input type="text" value={amount} onChange={ (e) => setAmount(e.target.value)}  placeholder='enter amount'/>
            </div>
            <button className='btn' on>Add Transaction</button>
        </form>
    </div>
  )
}

export default AddNewTransaction