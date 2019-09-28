import React from 'react';
import MahjongScoreFields from './MahjongScoreFields.js';
import TransactionViews from './TransactionViews.js';
import './App.css';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      points: 0
    };
  }

  onClick = (button) => {
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
  }

  render()
  {
    return (
      <div className="App">
        <MahjongScoreFields zeroPoint="30000" points={this.state.points} />
        <TransactionViews onClick={this.onClick} />
      </div>
    );
  }
}

export default App;