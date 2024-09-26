import React from 'react'

function Transaction( {key, transaction}) {
    const sign= transaction.amount<0?'-':'+';
  return (
    <div>
         <li className={sign==='-'?'minus':'plus'} key={key}>
              {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className='delete-btn'>x</button>
            </li>
    </div>
  )
}

export default Transaction