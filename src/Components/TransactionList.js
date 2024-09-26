import React, { useContext } from 'react'
import { globalContext } from '../Context/global'
import Transaction from './Transaction';

function TransactionList() {
  const {transactions}=useContext(globalContext);
  return (
    <div>
        <h3>History</h3>
        <ul  className='list'>
          {transactions.map ( transaction => (<Transaction key = {transaction.id} transaction={transaction} />))}
        </ul>
    </div>
  )
}

export default TransactionList