import React from 'react';

class ConfirmTransactionPopup extends React.Component
{
  buttons = (payment) =>
  {
    if (parseInt(this.props.table) === 0) //East Tsumo
    {
      return (
        <div className="winlosechoice">
          <div className="winchoice">
            <button data-direction="get"
                    data-amount={(payment * 3) + (this.props.honba * 300)}
                    onClick={e => this.props.onClick(e.target)}>Win as East</button>
            Receive {payment * 3} + {this.props.honba * 300} = {(payment * 3) + (this.props.honba * 300)} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={payment + (this.props.honba * 100)} 
                    onClick={e => this.props.onClick(e.target)}>Lose to East</button>
            Pay {payment} + {this.props.honba * 100} = {payment + (this.props.honba * 100)} points.
          </div>
        </div>
      );
    }
    if (parseInt(this.props.table) === 1) //East Ron
    {
      return (
        <div className="winlosechoice">
          <div className="winchoice">
            <button data-direction="get"
                    data-amount={payment + (this.props.honba * 300)}
                    onClick={e => this.props.onClick(e.target)}>Win as East</button>
            Receive {payment} + {this.props.honba * 300} = {payment + (this.props.honba * 300)} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={payment + (this.props.honba * 300)}
                    onClick={e => this.props.onClick(e.target)}>Lose to East</button>
            Pay {payment} + {this.props.honba * 300} = {payment + (this.props.honba * 300)} points.
          </div>
        </div>
      );
    }
    if (parseInt(this.props.table) === 2) //Other Tsumo
    {
      return (
        <div className="winlosechoice">
          <div className="winchoice">
            <button data-direction="get"
                    data-amount={(payment.east + payment.other * 2) + (this.props.honba * 300)}
                    onClick={e => this.props.onClick(e.target)}>Win as Other</button>
            Receive {payment.east + payment.other * 2} + {this.props.honba * 300} = {(payment.east + payment.other * 2) + (this.props.honba * 300)} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={(payment.other) + (this.props.honba * 100)}
                    onClick={e => this.props.onClick(e.target)}>Lose as Other</button>
            Pay {payment.other} + {this.props.honba * 100} = {(payment.other) + (this.props.honba * 100)} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={(payment.east) + (this.props.honba * 100)}
                    onClick={e => this.props.onClick(e.target)}>Lose as East</button>
            Pay {payment.east} + {this.props.honba * 100} = {(payment.east) + (this.props.honba * 100)} points.
            </div>
        </div>
      );
    }
    if (parseInt(this.props.table) === 3) //Other Ron
    {
      return (
        <div className="winlosechoice">
          <div className="winchoice">
            <button data-direction="get"
                    data-amount={payment + (this.props.honba * 300)}
                    onClick={e => this.props.onClick(e.target)}>Win as Other</button>
            Receive {payment} + {this.props.honba * 300} = {payment + (this.props.honba * 300)} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={payment + (this.props.honba * 300)}
                    onClick={e => this.props.onClick(e.target)}>Lose to Other</button>
            Pay {payment} + {this.props.honba * 300} = {payment + (this.props.honba * 300)} points.
          </div>
        </div>
      );
    }
  }

  render()
  {
    if (parseInt(this.props.table) === 2)
    {
      return (
        <div>
          <div className="popupbackdrop"></div>
          <div className="popup">
            {this.buttons({east: parseInt(this.props.paymentEast), other: parseInt(this.props.paymentOther) })}
            <button className="cancel" name="cancel" onClick={e => this.props.onClick(e.target)}>Cancel</button>
          </div>
        </div>
      );
    }
    else
    {
      return (
        <div>
        <div className="popupbackdrop"></div>
          <div className="popup">
            {this.buttons(parseInt(this.props.payment))}
            <button className="cancel" name="cancel" onClick={e => this.props.onClick(e.target)}>Cancel</button>
          </div>
        </div>
      );
    }
  }
}

export default ConfirmTransactionPopup;