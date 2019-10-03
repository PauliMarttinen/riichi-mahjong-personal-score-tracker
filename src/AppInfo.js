import React from 'react';

class AppInfo extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      show: false
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState = () =>
  {
    this.setState(state => ({
      show: !this.state.show
    }));
  }

  render()
  {
    if (this.state.show)
    {
      return (
        <div className="appinfo">
          <div className="popupbackdrop">
            <button className="appinfobutton" onClick={this.changeState}>
              Close
            </button>
          </div>
          <div className="popup">
            <h1>Riichi Mahjong Personal Score Tracker</h1>
            <p>Quick app for keeping track of your Riichi Mahjong score!</p>
            <h2>Small transactions</h2>
            <p>The Small Transactions tab is intended for quick access to the very common small transactions of 1000 or 1500 points. You can quickly pay and receive riichi sticks and tenpai bonuses using the Small Transactions tab without having to search for applicable buttons from the scoring table.</p>
            <h2>Scoring Table</h2>
            <p>The Scoring Table tab contains most of the transaction possibilities. Not only is it just buttons for transactions, it can also be used a digital scoring table in general.</p>
            <h2>Limit Hands</h2>
            <p>The Limit Hands tab contains transactions for limit hands, i.e. Mangan and upwards. It doesn't currently let you do stacked yakuman directly, but you can just input several yakuman in a row, should you be so lucky.</p>
            <h2>Custom Input</h2>
            <p>The Custom Input tab is a tool for quickly setting your score to be whatever. This is intended to be used if you discover a discrepancy between what the app says and the real game situation.</p>
            <h2>Creation</h2>
            <p>This app is created by Pauli Marttinen as a ReactJS learning project in 2019.</p>
            <p>Source code and stuff is on <a href="https://github.com/PauliMarttinen/riichi-mahjong-personal-score-tracker">GitHub</a>.</p>
            <p>Released under the MIT license.</p>
          </div>
        </div>
      );
    }
    else
    {
      return (
        <button className="appinfobutton" onClick={this.changeState}>?</button>
      );
    }
  }
}

export default AppInfo;