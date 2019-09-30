//Element with a number input with minus/plus buttons next to it.

import React from 'react';
import formatPoints from './FormatPoints.js';

class IncreaseDecrease extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      value: parseInt(this.props.value),
    }
  }

  onClick = (action) =>
  {
    var increment = parseInt(this.props.increment);
    var minimum;
    if (this.props.minimum === "noMinimum")
    {
      minimum = "noMinimum";
    }
    else
    {
      minimum = parseInt(this.props.minimum);
    }

    var newValue = this.state.value;
    if (action === "decrease" && ((this.state.value - increment) >= minimum || minimum === "noMinimum"))
    {
      newValue = this.state.value - increment
    }
    else if (action === "increase")
    {
      newValue = this.state.value + increment
    }

    this.setState({
      value: newValue
    });
    this.props.onClick(newValue);
  }

  render()
  {
    var valueDisplay;
    if (this.props.formatPoints === "true")
    {
      valueDisplay = formatPoints(this.state.value);
    }
    else
    {
      valueDisplay = this.state.value;
    }
    
    return (
      <div>
        <div className="label">
          {this.props.label}
        </div>
        <div>
          <button name="decrease" onClick={e => this.onClick(e.target.name)}>–</button>
          <div>{valueDisplay}</div>
          <button name="increase" onClick={e => this.onClick(e.target.name)}>+</button>
        </div>
      </div>
    );
  }
}

export default IncreaseDecrease;