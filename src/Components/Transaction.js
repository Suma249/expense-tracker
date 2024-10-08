import React, { useContext } from 'react'
import { GlobalContext } from '../Context/global';

function Transaction( {transaction}) {
  const {deleteTransaction} = useContext(GlobalContext)
    const sign= transaction.amount<0?'-':'+';
  return (
    <div>
         <li className={sign==='-'?'minus':'plus'} key={transaction.id}>
              {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>x</button>
            </li>
    </div>
  )
}

export default Transaction