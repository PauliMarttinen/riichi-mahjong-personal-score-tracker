import React from 'react';

class ConfirmTransactionPopup extends React.Component
{
  buttons = (payment) =>
  {
    if (parseInt(this.props.table) === 0) //East Tsumo
    {
      return (
        <div>
          <button data-direction="get" data-amount={(payment * 3) + (this.props.honba * 300)} onClick={e => this.props.onClick(e.target)}>Win as East</button>
          <button data-direction="pay" data-amount={payment + (this.props.honba * 100)} onClick={e => this.props.onClick(e.target)}>Lose to East</button>
        </div>
      );
    }
    if (parseInt(this.props.table) === 1) //East Ron
    {
      return (
        <div>
          <button data-direction="get" data-amount={payment + (this.props.honba * 300)} onClick={e => this.props.onClick(e.target)}>Win as East</button>
          <button data-direction="pay" data-amount={payment + (this.props.honba * 300)} onClick={e => this.props.onClick(e.target)}>Lose to East</button>
        </div>
      );
    }
    if (parseInt(this.props.table) === 2) //Other Tsumo
    {
      return (
        <div>
          <button data-direction="get" data-amount={(payment.east + payment.other * 2) + (this.props.honba * 300)} onClick={e => this.props.onClick(e.target)}>Win</button>
          <button data-direction="pay" data-amount={(payment.other) + (this.props.honba * 100)} onClick={e => this.props.onClick(e.target)}>Lose as Other</button>
          <button data-direction="pay" data-amount={(payment.east) + (this.props.honba * 100)} onClick={e => this.props.onClick(e.target)}>Lose as East</button>
        </div>
      );
    }
    if (parseInt(this.props.table) === 3) //Other Ron
    {
      return (
        <div>
          <button data-direction="get" data-amount={payment + (this.props.honba * 300)} onClick={e => this.props.onClick(e.target)}>Win to Other</button>
          <button data-direction="pay" data-amount={payment + (this.props.honba * 300)} onClick={e => this.props.onClick(e.target)}>Lose to Other</button>
        </div>
      );
    }
  }

  render()
  {
    if (parseInt(this.props.table) === 2)
    {
      
      return (
        <div className="popup">
          <div>
            Table: {this.props.table}. East: {this.props.paymentEast}, other: {this.props.paymentOther}. Honba: {this.props.honba}.
          </div>
          <button name="cancel" onClick={e => this.props.onClick(e.target)}>Cancel</button>
          {this.buttons({east: parseInt(this.props.paymentEast), other: parseInt(this.props.paymentOther) })}
        </div>
      );
    }
    else
    {
      return (
        <div className="popup">
          <div>
            Table: {this.props.table}. Amount: {this.props.payment}. Honba: {this.props.honba}.
          </div>
          <button name="cancel" onClick={e => this.props.onClick(e.target)}>Cancel</button>
          {this.buttons(parseInt(this.props.payment))}
        </div>
      );
    }
  }
}

export default ConfirmTransactionPopup;