//A Small Transactions Button is a button for paying or receiving 1000 or 1500 points.
//
//It's for quick access to the very common 1000 and 1500-point transactions:
// - Giving away or receiving riichi sticks.
// - Paying no-tenpai penalty or receiving tenpai bonus.
// - Paying or receiving for cheap 1000/1500-point hands.
//
//Out of the two similarly named components and files, this one is a single button and has all the functionality.

import React from 'react';
import './button.css';

export class SmallTransactionsButton extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e)
  {
    console.log(this.props.direction);
    console.log(this.props.amount);
  }

  render()
  {
    var direction = (this.props.direction === "pay") ? "Pay" : "Get";

    return (
      <div onClick={this.handleClick} className="button smallTransactions">
        {direction} {this.props.amount}
      </div>
    );
  }
}

export default SmallTransactionsButton;