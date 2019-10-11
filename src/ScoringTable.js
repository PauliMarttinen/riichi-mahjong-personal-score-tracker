//These are the buttons for the scoring table.

import React from 'react';

import ViewTabs from './Tabs/ViewTabs.js';

import TransactionButton from './TransactionButton.js';

class ScoringTable extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      show20fu: true,
      table: 0
    }
  }

  changeTable = (newTable) =>
  {
    newTable = parseInt(newTable);
    this.setState({
      table: newTable,
      show20fu: (newTable === 0 || newTable === 2) ? true : false
    });
  }

  unroundedBasePoints = (han, fu) =>
  {
    return (fu * Math.pow(2, 2 + han));
  }

  render()
  {
    return (
      <div className="scoringtable">
        <ViewTabs index={this.state.table} onClick={this.changeTable}>
          <div className="tab">East Tsumo</div>
          <div className="tab">East Ron</div>
          <div className="tab">Other Tsumo</div>
          <div className="tab">Other Ron</div>
        </ViewTabs>
        <table>
          <tbody>
            <tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th></tr>
            {(this.state.show20fu) ? <tr>
              <th>20</th>
              <td></td>
              <td><TransactionButton handsize="2 han 20 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 20)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="3 han 20 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 20)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 20 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 20)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr> : null }
            <tr>
            <th>25</th>
              <td></td>
              <td>{(!this.state.show20fu) ? <TransactionButton handsize="2 han 25 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 25)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /> : null}</td>
              <td><TransactionButton handsize="3 han 25 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 25)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 25 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 25)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <th>30</th>
              <td><TransactionButton handsize="1 han 30 fu" limithand="false" basepoints={this.unroundedBasePoints(1, 30)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="2 han 30 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 30)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="3 han 30 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 30)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 30 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 30)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <th>40</th>
              <td><TransactionButton handsize="1 han 40 fu" limithand="false" basepoints={this.unroundedBasePoints(1, 40)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="2 han 40 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 40)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="3 han 40 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 40)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 40 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 40)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <th>50</th>
              <td><TransactionButton handsize="1 han 50 fu" limithand="false" basepoints={this.unroundedBasePoints(1, 50)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="2 han 50 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 50)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="3 han 50 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 50)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 50 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 50)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <th>60</th>
              <td><TransactionButton handsize="1 han 60 fu" limithand="false" basepoints={this.unroundedBasePoints(1, 60)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="2 han 60 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 60)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="3 han 60 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 60)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 60 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 60)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <th>70</th>
              <td><TransactionButton handsize="1 han 70 fu" limithand="false" basepoints={this.unroundedBasePoints(1, 70)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="2 han 70 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 70)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="3 han 70 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 70)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 70 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 70)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <th>80</th>
              <td><TransactionButton handsize="1 han 80 fu" limithand="false" basepoints={this.unroundedBasePoints(1, 80)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="2 han 80 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 80)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="3 han 80 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 80)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 80 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 80)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <th>90</th>
              <td><TransactionButton handsize="1 han 90 fu" limithand="false" basepoints={this.unroundedBasePoints(1, 90)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="2 han 90 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 90)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="3 han 90 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 90)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 90 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 90)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
            <tr>
              <th>100</th>
              <td><TransactionButton handsize="1 han 100 fu" limithand="false" basepoints={this.unroundedBasePoints(1, 100)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="2 han 100 fu" limithand="false" basepoints={this.unroundedBasePoints(2, 100)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="3 han 100 fu" limithand="false" basepoints={this.unroundedBasePoints(3, 100)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
              <td><TransactionButton handsize="4 han 100 fu" limithand="false" basepoints={this.unroundedBasePoints(4, 100)} table={this.state.table} honba={this.props.honba} onClick={this.props.transactionConfirmation} /></td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default ScoringTable;