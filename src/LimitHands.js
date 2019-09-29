//These are the buttons for the limit hands.

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import IncreaseDecrease from './IncreaseDecrease.js';

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

  transactionButton = (basepoints) =>
  {
    var payment, agari, result;

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
      payment = {
        east: (basepoints * 2) + (this.state.honba * 100),
        others: basepoints + (this.state.honba * 100)
      };
      
      result = <button data-table={this.state.table} data-payment={payment.others * 4} onClick={e => this.props.transactionConfirmation(e.target)}>{payment.others}<br />{payment.east}</button>;
    }
    else
    {
      var honbaBonus = this.state.honba * ((agari === "tsumo") ? 100 : 300);
      payment += honbaBonus;
      result = <button data-table={this.state.table} data-payment={payment} onClick={e => this.props.transactionConfirmation(e.target)}>{payment}</button>;
    }

    return result;
  }

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
              <td>{this.transactionButton(2000)}</td>
            </tr>
            <tr>
              <td>6–7</td>
              <td>Haneman</td>
              <td>{this.transactionButton(3000)}</td>
            </tr>
            <tr>
              <td>8–10</td>
              <td>Baiman</td>
              <td>{this.transactionButton(4000)}</td>
            </tr>
            <tr>
              <td>11–12</td>
              <td>Sanbaiman</td>
              <td>{this.transactionButton(6000)}</td>
            </tr>
            <tr>
              <td>13+</td>
              <td>Yakuman</td>
              <td>{this.transactionButton(8000)}</td>
            </tr>
          </tbody>
        </table>
        <IncreaseDecrease value="0" minimum="0" increment="1" label="Honba" onClick={this.changeHonba} />
      </div>
    );
  }
}

export default LimitHands;