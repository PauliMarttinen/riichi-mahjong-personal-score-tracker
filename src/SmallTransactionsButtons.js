//Small Transactions Buttons are the buttons for paying or receiving 1000 or 1500 points.
//
//They're for quick access to the very common 1000 and 1500-point transactions:
// - Giving away or receiving riichi sticks.
// - Paying no-tenpai penalty or receiving tenpai bonus.
// - Paying or receiving for cheap 1000/1500-point hands.
//
//Out of the two similarly named components and files, this one is just a simple component that wraps the actual buttons into one component.

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