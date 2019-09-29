//Element with a number input with minus/plus buttons next to it.

import React from 'react';

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
    const increment = parseInt(this.props.increment);
    const minimum = parseInt(this.props.minimum);
    var newValue;
    if (action === "decrease" && (this.state.value - increment) >= minimum)
    {
      newValue = this.state.value - increment
    }
    //Generically speaking, the next condition should also have a check for not surpassing the maximum value;
    //however, there's no theoretical maximum to honba in Riichi Mahjong, and I can't yacks to figure out how
    //to code it so that the component features a maximum that needs not be cared about.
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
    return (
      <div>
        <div className="label">
          {this.props.label}
        </div>
        <div>
          <button name="decrease" onClick={e => this.onClick(e.target.name)}>–</button>
          <input type="text" value={this.state.value} disabled="disabled" />
          <button name="increase" onClick={e => this.onClick(e.target.name)}>+</button>
        </div>
      </div>
    );
  }
}

export default IncreaseDecrease;