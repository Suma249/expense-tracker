import React, { useState } from 'react'

function AddNewTransaction() {
    const [text,setText]=useState('');
    const [amount, setAmount]=useState('');
  return (
    <div>
        <h3>Add New Transaction</h3>
        <form id='form'>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type="text" value={text} onChange={ (e) => setText(e.target.value)}  placeholder='enter text'/>
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amount<br/>(negative - expense, positive-income)</label>
                <input type="text" value={amount} onChange={ (e) => setAmount(e.target.value)}  placeholder='enter amount'/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}

export default AddNewTransaction