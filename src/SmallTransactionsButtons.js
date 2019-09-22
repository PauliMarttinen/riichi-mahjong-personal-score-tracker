import React from 'react';
import SmallTransactionsButton from './SmallTransactionsButton.js';
//import './button.css';

export class SmallTransactionsButtons extends React.Component
{
  render()
  {
    return (
      <div className="keypad">
        <SmallTransactionsButton direction="pay" amount="1000"/>
        <SmallTransactionsButton direction="get" amount="1000"/>
        <SmallTransactionsButton direction="pay" amount="1500"/>
        <SmallTransactionsButton direction="get" amount="1500"/>
      </div>
    );
  }
}

export default SmallTransactionsButtons;