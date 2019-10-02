//These are the buttons for the limit hands.

import React from 'react';

import ViewTabs from './Tabs/ViewTabs.js';
import Tab from './Tabs/Tab.js';

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

  changeTable = (newTable) =>
  {
    this.setState({
      table: parseInt(newTable)
    });
  }

  render()
  {
    return (
      <div className="limithands">
        <ViewTabs index={this.state.table} onClick={this.changeTable}>
          <Tab index="0">East Tsumo</Tab>
          <Tab index="1">East Ron</Tab>
          <Tab index="2">Other Tsumo</Tab>
          <Tab index="3">Other Ron</Tab>
        </ViewTabs>
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