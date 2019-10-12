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
        <button data-direction="custom" data-amount={this.state.customPoints} onClick={e => this.props.onClick(e.target)}>Set score</button>
      </div>
    );
  }
}

export default CustomInput;