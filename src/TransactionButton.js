//This is a single transaction button to be used in the Scoring Table and the Limit Hands.

import React from 'react';

class TransactionButton extends React.Component
{
  roundUp = (basepoints) =>
  {
    return Math.ceil(basepoints / 100) * 100;
  }
  render()
  {
    var payment, paymentWithHonba, agari, result;
    var basepoints = parseInt(this.props.basepoints);
    var honba = parseInt(this.props.honba);
    var table = parseInt(this.props.table);

    if (this.props.limithand === "false" && basepoints > 2000)
    {
      basepoints = 2000;
    }

    if (table === 0) //East Tsumo
    {
      payment = basepoints * 2;
      agari = "tsumo";
    }
    if (table === 1) //East Ron
    {
      payment = basepoints * 6;
      agari = "ron";
    }
    if (table === 3) //Other Ron
    {
      payment = basepoints * 4;
      agari = "ron";
    }

    if (table === 2) //Other Tsumo
    {
      if (this.props.limithand === "false")
      {
        //payment = this.roundUp(basepoints) * 2 + this.roundUp(basepoints * 2);
        payment = {
          east: this.roundUp(basepoints * 2),
          other: this.roundUp(basepoints)
        }
        paymentWithHonba = {
          east: this.roundUp(basepoints * 2) + (honba * 100),
          other: this.roundUp(basepoints) + (honba * 100)
        };
      }
      else
      {
        payment = {
          east: basepoints * 2,
          other: basepoints
        }
        paymentWithHonba = {
          east: (basepoints * 2) + (honba * 100),
          other: basepoints + (honba * 100)
        };
      }
      result = <button data-table={table} data-paymenteast={payment.east} data-paymentother={payment.other} data-honba={honba} onClick={e => this.props.onClick(e.target)}>{paymentWithHonba.other}<br />{paymentWithHonba.east}</button>;
    }
    else
    {
      if (this.props.limithand === "false")
      {
        payment = this.roundUp(payment);
      }

      var honbaBonus = honba * ((agari === "tsumo") ? 100 : 300);
      paymentWithHonba = payment + honbaBonus;
      result = <button data-table={table} data-payment={payment} data-honba={honba} onClick={e => this.props.onClick(e.target)}>{paymentWithHonba}</button>;
    }

    return result;
  }
}

export default TransactionButton;