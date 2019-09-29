//These are the buttons for the scoring table.

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import IncreaseDecrease from './IncreaseDecrease.js';
import TransactionButton from './TransactionButton.js';

class ScoringTable extends React.Component
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
      <div>
        <Tabs value={this.state.table} fullWidth="fullWidth" onChange={this.changeTable}>
          <Tab label="East Tsumo"></Tab>
          <Tab label="East Ron"></Tab>
          <Tab label="Other Tsumo"></Tab>
          <Tab label="Other Ron"></Tab>
        </Tabs>
        <table>
          <tbody>
            <tr><th>HEre be scoring table</th></tr>
          </tbody>
        </table>
        <IncreaseDecrease value="0" minimum="0" increment="1" label="Honba" onClick={this.changeHonba} />
      </div>
    );
  }
}

export default ScoringTable;