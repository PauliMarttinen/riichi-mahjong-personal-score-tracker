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
      <div className="limithands">
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
              <td><TransactionButton limithand="true" basepoints="2000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>6–7</td>
              <td>Haneman</td>
              <td><TransactionButton limithand="true" basepoints="3000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>8–10</td>
              <td>Baiman</td>
              <td><TransactionButton limithand="true" basepoints="4000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>11–12</td>
              <td>Sanbaiman</td>
              <td><TransactionButton limithand="true" basepoints="6000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>13+</td>
              <td>Yakuman</td>
              <td><TransactionButton limithand="true" basepoints="8000" table={this.state.table} honba={this.state.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
          </tbody>
        </table>
        <IncreaseDecrease value={this.state.honba} minimum="0" increment="1" label="Honba" onClick={this.changeHonba} />
      </div>
    );
  }
}

export default LimitHands;