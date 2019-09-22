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