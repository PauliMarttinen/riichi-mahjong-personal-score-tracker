import React from 'react';

class ConfirmTransactionPopup extends React.Component
{
  buttons = (payment) =>
  {
    if (parseInt(this.props.table) === 0) //East Tsumo
    {
      var receiveBase = payment * 3;
      var receiveHonba = this.props.honba * 300;
      var receiveTotal = receiveBase + receiveHonba;

      var payBase = payment;
      var payHonba = this.props.honba * 100;
      var payTotal = payBase + payHonba;

      return (
        <div className="winlosechoice">
          <div className="winchoice">
            <button data-direction="get"
                    data-amount={receiveTotal}
                    onClick={e => this.props.onClick(e.target)}>Win as East</button>
            Receive {receiveBase} + {receiveHonba} = {receiveTotal} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={payTotal} 
                    onClick={e => this.props.onClick(e.target)}>Lose to East</button>
            Pay {payBase} + {payHonba} = {payTotal} points.
          </div>
        </div>
      );
    }
    if (parseInt(this.props.table) === 1) //East Ron
    {
      var receiveBase = payment;
      var receiveHonba = this.props.honba * 300;
      var receiveTotal = receiveBase + receiveHonba;

      var payBase = payment;
      var payHonba = this.props.honba * 300;
      var payTotal = payBase + payHonba;

      return (
        <div className="winlosechoice">
          <div className="winchoice">
            <button data-direction="get"
                    data-amount={receiveTotal}
                    onClick={e => this.props.onClick(e.target)}>Win as East</button>
            Receive {receiveBase} + {receiveHonba} = {receiveTotal} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={payTotal}
                    onClick={e => this.props.onClick(e.target)}>Lose to East</button>
            Pay {payBase} + {payHonba} = {payTotal} points.
          </div>
        </div>
      );
    }
    if (parseInt(this.props.table) === 2) //Other Tsumo
    {
      var receiveBase = payment.east + payment.other * 2;
      var receiveHonba = this.props.honba * 300;
      var receiveTotal = receiveBase + receiveHonba;

      var payOtherBase = payment.other;
      var payOtherHonba = this.props.honba * 100;
      var payOtherTotal = payOtherBase + payOtherHonba;

      var payEastBase = payment.east;
      var payEastHonba = this.props.honba * 100;
      var payEastTotal = payEastBase + payEastHonba;

      return (
        <div className="winlosechoice">
          <div className="winchoice">
            <button data-direction="get"
                    data-amount={receiveTotal}
                    onClick={e => this.props.onClick(e.target)}>Win as Other</button>
            Receive {receiveBase} + {receiveHonba} = {receiveTotal} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={payOtherTotal}
                    onClick={e => this.props.onClick(e.target)}>Lose as Other</button>
            Pay {payOtherBase} + {payOtherHonba} = {payOtherTotal} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={payEastTotal}
                    onClick={e => this.props.onClick(e.target)}>Lose as East</button>
            Pay {payEastBase} + {payEastHonba} = {payEastTotal} points.
            </div>
        </div>
      );
    }
    if (parseInt(this.props.table) === 3) //Other Ron
    {
      var receiveBase = payment;
      var receiveHonba = this.props.honba * 300;
      var receiveTotal = receiveBase + receiveHonba;

      var payBase = payment;
      var payHonba = this.props.honba * 300;
      var payTotal = payBase + payHonba;

      return (
        <div className="winlosechoice">
          <div className="winchoice">
            <button data-direction="get"
                    data-amount={receiveTotal}
                    onClick={e => this.props.onClick(e.target)}>Win as Other</button>
            Receive {receiveBase} + {receiveHonba} = {receiveTotal} points.
          </div>
          <div className="losechoice">
            <button data-direction="pay"
                    data-amount={payTotal}
                    onClick={e => this.props.onClick(e.target)}>Lose to Other</button>
            Pay {payBase} + {payHonba} = {payTotal} points.
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