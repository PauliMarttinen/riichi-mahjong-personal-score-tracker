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
    var minimum, maximum;
    if (this.props.minimum === "noMinimum")
    {
      minimum = "noMinimum";
    }
    else
    {
      minimum = parseInt(this.props.minimum);
    }

    //Neither need for the IncreaseDecrease component within this Mahjong app requires a maximum, but
    //I felt like this component needs a maximum feature for completeness sake.
    if (this.props.maximum === "noMaximum")
    {
      maximum = "noMaximum";
    }
    else
    {
      maximum = parseInt(this.props.maximum);
    }

    var oldValue = this.props.value;
    var proposedValue, newValue;
    
    //Figure out what the new value should be.
    if (action === "decrease")
    {
      proposedValue = oldValue - increment;
    }
    else if (action === "fastdecrease")
    {
      proposedValue = oldValue - 10 * increment;
    }
    else if (action === "increase")
    {
      proposedValue = oldValue + increment;
    }
    else if (action === "fastincrease")
    {
      proposedValue = oldValue + 10 * increment;
    }

    //Check if the new value is going to be within boundaries.
    if ((minimum === "noMinimum" || proposedValue >= minimum) && (maximum === "noMaximum" || proposedValue <= maximum))
    {
      newValue = proposedValue;
    }
    else
    {
      newValue = oldValue;
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
      valueDisplay = formatPoints(parseInt(this.state.value));
    }
    else
    {
      valueDisplay = parseInt(this.props.value);
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