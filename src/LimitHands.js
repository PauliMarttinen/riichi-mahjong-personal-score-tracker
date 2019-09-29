//These are the buttons for the limit hands.

import React from 'react';
import IncreaseDecrease from './IncreaseDecrease.js';

class LimitHands extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      honba: 0,
      agari: "tsumo",
      playersWind: "east",
      theirWind: "other"
    }

    this.changeHonba = this.changeHonba.bind(this);
  }

  displayPoints(basepoints)
  {
    var result = basepoints;
    var honbaBonus = this.state.honba * ((this.state.agari === "tsumo") ? 100 : 300);
    result += honbaBonus;
    return result;
  }

  changeHonba(newHonba)
  {
    this.setState({
      honba: newHonba
    });
  }

  render()
  {
    return (
      <div>
        <IncreaseDecrease value="0" minimum="0" increment="1" label="Honba" onClick={this.changeHonba} />
        <table>
          <tbody>
            <tr><td>5</td><td>Mangan</td><td><button>{this.displayPoints(2000)}</button></td></tr>
            <tr><td>6–7</td><td>Haneman</td><td><button>{this.displayPoints(3000)}</button></td></tr>
            <tr><td>8–10</td><td>Baiman</td><td><button>{this.displayPoints(4000)}</button></td></tr>
            <tr><td>11–12</td><td>Sanbaiman</td><td><button>{this.displayPoints(6000)}</button></td></tr>
            <tr><td>13+</td><td>Yakuman</td><td><button>{this.displayPoints(8000)}</button></td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LimitHands;