//This is a single transaction button to be used in the Scoring Table and the Limit Hands.

import React from 'react';

class TransactionButton extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    var payment, paymentWithHonba, agari, result;
    var basepoints = parseInt(this.props.basepoints);

    if (this.props.table === 0) //East Tsumo
    {
      payment = basepoints * 2;
      agari = "tsumo";
    }
    if (this.props.table === 1) //East Ron
    {
      payment = basepoints * 6;
      agari = "ron";
    }
    if (this.props.table === 3) //Other Ron
    {
      payment = basepoints * 4;
      agari = "ron";
    }

    if (this.props.table === 2) //Other Tsumo
    {
      payment = basepoints * 4;
      paymentWithHonba = {
        east: (basepoints * 2) + (this.props.honba * 100),
        others: basepoints + (this.props.honba * 100)
      };
      
      result = <button data-table={this.props.table} data-payment={payment} data-honba={this.props.honba} onClick={e => this.props.onClick(e.target)}>{paymentWithHonba.others}<br />{paymentWithHonba.east}</button>;
    }
    else
    {
      var honbaBonus = this.props.honba * ((agari === "tsumo") ? 100 : 300);
      paymentWithHonba = payment + honbaBonus;
      result = <button data-table={this.props.table} data-payment={payment} data-honba={this.props.honba} onClick={e => this.props.onClick(e.target)}>{paymentWithHonba}</button>;
    }

    return result;
  }
}

export default TransactionButton;