//A Small Transactions Button is a button for paying or receiving 1000 or 1500 points.
//
//It's for quick access to the very common 1000 and 1500-point transactions:
// - Giving away or receiving riichi sticks.
// - Paying no-tenpai penalty or receiving tenpai bonus.
// - Paying or receiving for cheap 1000/1500-point hands.
//
//Out of the two similarly named components and files, this one is a single button.

import React from 'react';


export class SmallTransactionsButton extends React.Component
{
  render()
  {
    var directionText = (this.props.direction === "pay") ? "Pay" : "Get";

    return (
      <button data-direction={this.props.direction} data-amount={this.props.amount} onClick={e => this.props.onClick(e.target)} className="smallTransactions">
        {directionText} {this.props.amount}
      </button>
    );
  }
}

export default SmallTransactionsButton;