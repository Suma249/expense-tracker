import React, { useContext } from 'react'
import { GlobalContext } from '../Context/global'
import Transaction from './Transaction';

function TransactionList() {
  const {transactions}=useContext(GlobalContext);
 // console.log("transactions in transacxtion list: "+transactions)
  return (
    <div>
        <h3>History</h3>
        <ul  className='list'>
          {transactions.map ( transaction => (<Transaction transaction={transaction} />))}
        </ul>
    </div>
  )
}

export default TransactionList