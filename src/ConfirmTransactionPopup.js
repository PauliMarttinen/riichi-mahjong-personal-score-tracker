import React from 'react';

class ConfirmTransactionPopup extends React.Component
{
  buttons = (payment) =>
  {
    var receiveBase, receiveHonba, receiveTotal;
    var payBase, payHonba, payTotal;
    var payOtherBase, payOtherHonba, payOtherTotal;
    var payEastBase, payEastHonba, payEastTotal;

    if (parseInt(this.props.table) === 0) //East Tsumo
    {
      receiveBase = payment * 3;
      receiveHonba = this.props.honba * 300;
      receiveTotal = receiveBase + receiveHonba;

      payBase = payment;
      payHonba = this.props.honba * 100;
      payTotal = payBase + payHonba;

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
      receiveBase = payment;
      receiveHonba = this.props.honba * 300;
      receiveTotal = receiveBase + receiveHonba;

      payBase = payment;
      payHonba = this.props.honba * 300;
      payTotal = payBase + payHonba;

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
      receiveBase = payment.east + payment.other * 2;
      receiveHonba = this.props.honba * 300;
      receiveTotal = receiveBase + receiveHonba;

      payOtherBase = payment.other;
      payOtherHonba = this.props.honba * 100;
      payOtherTotal = payOtherBase + payOtherHonba;

      payEastBase = payment.east;
      payEastHonba = this.props.honba * 100;
      payEastTotal = payEastBase + payEastHonba;

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
      receiveBase = payment;
      receiveHonba = this.props.honba * 300;
      receiveTotal = receiveBase + receiveHonba;

      payBase = payment;
      payHonba = this.props.honba * 300;
      payTotal = payBase + payHonba;

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
    var winType;
    if (parseInt(this.props.table) === 0)
    {
      winType = "East Tsumo";
    }
    if (parseInt(this.props.table) === 1)
    {
      winType = "East Ron";
    }
    if (parseInt(this.props.table) === 2)
    {
      winType = "Other Tsumo";
    }
    if (parseInt(this.props.table) === 3)
    {
      winType = "Other Ron";
    }

    if (parseInt(this.props.table) === 2)
    {
      return (
        <div>
          <div className="popupbackdrop"></div>
          <div className="confirmtransactionpopup popup">
            <h1 className="confirmtransactionpopup title">{winType}<br />{this.props.handsize}</h1>
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
          <div className="confirmtransactionpopup popup">
            <h1 className="confirmtransactionpopup title">{winType}<br />{this.props.handsize}</h1>
            {this.buttons(parseInt(this.props.payment))}
            <button className="cancel" name="cancel" onClick={e => this.props.onClick(e.target)}>Cancel</button>
          </div>
        </div>
      );
    }
  }
}

export default ConfirmTransactionPopup;