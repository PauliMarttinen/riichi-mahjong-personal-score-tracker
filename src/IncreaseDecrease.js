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
    if ((action === "decrease" || action === "fastdecrease") && ((this.state.value - increment) >= minimum || minimum === "noMinimum"))
    {
      newValue = this.state.value - increment * ((action === "fastdecrease") ? 10 : 1);
    }
    else if (action === "increase" || action === "fastincrease")
    {
      newValue = this.state.value + increment * ((action === "fastincrease") ? 10 : 1);
    }

    this.setState({
      value: newValue
    });
    this.props.onClick(newValue);
  }

  render()
  {
    var valueDisplay, fastButtons;
    if (this.props.formatPoints === "true")
    {
      valueDisplay = formatPoints(this.state.value);
    }
    else
    {
      valueDisplay = this.props.value;
    }
    
    if (this.props.fastButtons === "true")
    {
      fastButtons = true;
    }
    else
    {
      fastButtons = false;
    }

    return (
      <div className="increasedecrease">
        <div className="label">
          {this.props.label}
        </div>
        <div className="action">
          {(fastButtons) ? <button className="decrease fast" name="fastdecrease" onClick={e => this.onClick(e.target.name)}>–</button> : null }
          <button className="decrease" name="decrease" onClick={e => this.onClick(e.target.name)}>–</button>
          <div>{valueDisplay}</div>
          <button className="increase" name="increase" onClick={e => this.onClick(e.target.name)}>+</button>
          {(fastButtons) ? <button className="increase fast" name="fastincrease" onClick={e => this.onClick(e.target.name)}>+</button> : null }
        </div>
      </div>
    );
  }
}

export default IncreaseDecrease;