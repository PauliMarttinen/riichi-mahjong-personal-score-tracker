import React from 'react';
import IncreaseDecrease from './IncreaseDecrease.js';

class CustomInput extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      customPoints: this.props.points
    }
  }

  changeValue = (newValue) =>
  {
    this.setState({
      customPoints: newValue
    });
  }

  render()
  {
    return (
      <div className="custominput">
        <IncreaseDecrease value={this.props.points} minimum="noMinimum" increment="100" label="Input score." formatPoints="true" onClick={this.changeValue} />
        <button data-direction="custom" data-amount={this.state.customPoints} onClick={e => this.props.onClick(e.target)}>Set score</button>
      </div>
    );
  }
}

export default CustomInput;