import React from 'react';
import CustomInput from './CustomInput.js';
import History from './History.js';

class Manipulate extends React.Component
{
  render()
  {
    return (
      <div className="manipulate">
        <CustomInput points={this.props.points} onClick={this.props.onCustomClick} />
        <History history={this.props.history} onClick={this.props.onHistoryClick} />
      </div>
    );
  }
}

export default Manipulate;