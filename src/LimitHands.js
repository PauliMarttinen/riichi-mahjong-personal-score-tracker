//These are the buttons for the limit hands.

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import IncreaseDecrease from './IncreaseDecrease.js';
import TransactionButton from './TransactionButton.js';

class LimitHands extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      honba: 0,
      table: 0
    }
  }

  /*transactionButton = (basepoints) =>
  {
    var payment, paymentWithHonba, agari, result;

    if (this.state.table === 0) //East Tsumo
    {
      payment = basepoints * 2;
      agari = "tsumo";
    }
    if (this.state.table === 1) //East Ron
    {
      payment = basepoints * 6;
      agari = "ron";
    }
    if (this.state.table === 3) //Other Ron
    {
      payment = basepoints * 4;
      agari = "ron";
    }

    if (this.state.table === 2) //Other Tsumo
    {
      payment = basepoints * 4;
      paymentWithHonba = {
        east: (basepoints * 2) + (this.state.honba * 100),
        others: basepoints + (this.state.honba * 100)
      };
      
      result = <button data-table={this.state.table} data-payment={payment} data-honba={this.state.honba} onClick={e => this.props.transactionConfirmation(e.target)}>{paymentWithHonba.others}<br />{paymentWithHonba.east}</button>;
    }
    else
    {
      var honbaBonus = this.state.honba * ((agari === "tsumo") ? 100 : 300);
      paymentWithHonba = payment + honbaBonus;
      result = <button data-table={this.state.table} data-payment={payment} data-honba={this.state.honba} onClick={e => this.props.transactionConfirmation(e.target)}>{paymentWithHonba}</button>;
    }

    return result;
  }*/

  changeHonba = (newHonba) =>
  {
    this.setState({
      honba: newHonba
    });
  }

  changeTable = (event, newTable) =>
  {
    this.setState({
      table: newTable
    });
  }

  render()
  {
    return (
      <div>
        <Tabs value={this.state.table} fullWidth="fullWidth" onChange={this.changeTable}>
          <Tab label="East Tsumo" />
          <Tab label="East Ron" />
          <Tab label="Other Tsumo" />
          <Tab label="Other Ron" />
        </Tabs>
        <table>
          <tbody>
            <tr>
              <td>5</td>
              <td>Mangan</td>
              <td><TransactionButton basepoints="2000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>6–7</td>
              <td>Haneman</td>
              <td><TransactionButton basepoints="3000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>8–10</td>
              <td>Baiman</td>
              <td><TransactionButton basepoints="4000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>11–12</td>
              <td>Sanbaiman</td>
              <td><TransactionButton basepoints="6000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>13+</td>
              <td>Yakuman</td>
              <td><TransactionButton basepoints="8000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
          </tbody>
        </table>
        <IncreaseDecrease value={this.state.honba} minimum="0" increment="1" label="Honba" onClick={this.changeHonba} />
      </div>
    );
  }
}

export default LimitHands;