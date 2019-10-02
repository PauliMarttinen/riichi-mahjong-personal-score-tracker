import React from 'react';
import ScoreDisplay from './ScoreDisplay.js';
import TransactionViews from './TransactionViews.js';
import AppInfo from './AppInfo.js';
import './App.css';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      zeroPoint: 30000,
      points: 0
    };
  }

  changePoints = (button) => {
    if (button.dataset.direction === "pay")
    {
      this.setState({
        points: this.state.points - parseInt(button.dataset.amount)
      });
    }
    if (button.dataset.direction === "get")
    {
      this.setState({
        points: this.state.points + parseInt(button.dataset.amount)
      });
    }
    if (button.dataset.direction === "custom")
    {
      this.setState({
        points: button.dataset.amount - this.state.zeroPoint
      });
    }
  }

  render()
  {
    return (
      <div className="App">
        <ScoreDisplay zeroPoint={this.state.zeroPoint} points={this.state.points} />
        <TransactionViews points={this.state.points + this.state.zeroPoint} onClick={this.changePoints} />
        <AppInfo />
      </div>
    );
  }
}

export default App;