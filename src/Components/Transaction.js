import React, { useContext } from 'react'
import { globalContext } from '../Context/global';

function Transaction( {key, transaction}) {
  const {deleteTransaction} = useContext(globalContext)
    const sign= transaction.amount<0?'-':'+';
  return (
    <div>
         <li className={sign==='-'?'minus':'plus'} key={key}>
              {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={deleteTransaction(key)} className='delete-btn'>x</button>
            </li>
    </div>
  )
}

export default Transaction