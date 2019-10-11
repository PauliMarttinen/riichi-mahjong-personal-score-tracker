//These are the buttons for the limit hands.

import React from 'react';

import ViewTabs from './Tabs/ViewTabs.js';

import TransactionButton from './TransactionButton.js';

class LimitHands extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      table: 0
    }
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
          <div className="tab">East Tsumo</div>
          <div className="tab">East Ron</div>
          <div className="tab">Other Tsumo</div>
          <div className="tab">Other Ron</div>
        </ViewTabs>
        <table>
          <tbody>
            <tr>
              <td>5</td>
              <td>Mangan</td>
              <td><TransactionButton handsize="Mangan" limithand="true" basepoints="2000" table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>6–7</td>
              <td>Haneman</td>
              <td><TransactionButton handsize="Haneman" limithand="true" basepoints="3000" table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>8–10</td>
              <td>Baiman</td>
              <td><TransactionButton handsize="Baiman" limithand="true" basepoints="4000" table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>11–12</td>
              <td>Sanbaiman</td>
              <td><TransactionButton handsize="Sanbaiman" limithand="true" basepoints="6000" table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <td>13+</td>
              <td>Yakuman</td>
              <td><TransactionButton handsize="Yakuman" limithand="true" basepoints="8000" table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default LimitHands;