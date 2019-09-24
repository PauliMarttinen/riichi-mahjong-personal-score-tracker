import React from 'react';
import MahjongScoreFields from './MahjongScoreFields.js';
import TransactionViews from './TransactionViews.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <MahjongScoreFields />
      <TransactionViews />
    </div>
  );
}

export default App;