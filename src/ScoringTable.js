//These are the buttons for the scoring table.

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import IncreaseDecrease from './IncreaseDecrease.js';

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

  displayPoints = (basepoints) =>
  {
    var result, agari;

    if (this.state.table === 0) //East Tsumo
    {
      result = basepoints * 2;
      agari = "tsumo";
    }
    if (this.state.table === 1) //East Ron
    {
      result = basepoints * 6;
      agari = "ron";
    }
    if (this.state.table === 3) //Other Ron
    {
      result = basepoints * 4;
      agari = "ron";
    }

    if (this.state.table === 2) //Other Tsumo
    {
      result = {
        east: (basepoints * 2) + (this.state.honba * 100),
        others: basepoints + (this.state.honba * 100)
      };
      return (
        <span>{result.others}<br />{result.east}</span>
      );
    }
    else
    {
      var honbaBonus = this.state.honba * ((agari === "tsumo") ? 100 : 300);
      result += honbaBonus;
      return (
        <span>{result}</span>
      );
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