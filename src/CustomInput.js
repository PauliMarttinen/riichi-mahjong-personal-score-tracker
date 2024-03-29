//Input custom score in case someone notices a difference between the score kept on this app and
//the score kept on some other score tracking feature such as sticks.

import React from 'react';
import IncreaseDecrease from './IncreaseDecrease.js';

class CustomInput extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      customPoints: parseInt(this.props.points)
    }
  }

  changeValue = (newValue) =>
  {
    this.setState({
      customPoints: parseInt(newValue)
    });
  }

  render()
  {
    return (
      <div className="custominput">
        <IncreaseDecrease value={this.state.customPoints} minimum="noMinimum" increment="100" fastButtons="true" label="Input custom score" formatPoints="true" onClick={this.changeValue} />
        <button data-direction="custom" data-amount={this.state.customPoints} onClick={e => this.props.onClick("custom", parseInt(e.target.dataset.amount))}>Set score</button>
      </div>
    );
  }
}

export default CustomInput;