//This component is the three kinds of transactions in swipeable tabs:
// - Small but common transactions (1000/1500 points)
// - Scoring table for most of the other transactions
// - Limit hands for the bigger transactions.
//
//If you have them all in one screen, the screen gets cluttered. Separating them in swipeable tabs will
//probably make it a ton easier to use and nicer to look at.

import React from 'react';

//For the tabs
import ViewTabs from './Tabs/ViewTabs.js';

//For the transaction buttons.
import SmallTransactionsButtons from './SmallTransactionsButtons.js';
import LimitHands from './LimitHands.js';
import ScoringTable from './ScoringTable.js';
import CustomInput from './CustomInput.js';
import History from './History.js';

import IncreaseDecrease from './IncreaseDecrease.js';

//Confirmation popup.
import ConfirmTransactionPopup from './ConfirmTransactionPopup.js';

class TransactionViews extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      index: 4,
      honba: 0,
      points: this.props.points,
      /* history: [], */
      history: [2600, -5200],
      confirmPopup: {
        show: false,
        table: 0,
        honba: 0,
        payment: 0,
        paymentEast: 0,
        paymentOther: 0,
        handSize: ""
      }
    };
  }

  changeTab = (newTab) =>
  {
    this.setState(
      {
        index: parseInt(newTab)
      }
    );
  };

  askToConfirmTransaction = (button) =>
  {
    this.setState({
      confirmPopup: {
        show: true,
        table: button.dataset.table,
        honba: button.dataset.honba,
        payment: button.dataset.payment,
        paymentEast: button.dataset.paymenteast,
        paymentOther: button.dataset.paymentother,
        handSize: button.dataset.handsize
      }
    });
  }

  confirmationClick = (direction, amount) =>
  {
    if (direction !== "cancel")
    {
      this.props.onClick(direction, amount);
    }
    this.setState({
      honba: 0,
      confirmPopup: {
        show: false,
        honba: 0,
        table: 0,
        payment: 0,
        paymentEast: 0,
        paymentOther: 0,
        handSize: ""
      }
    });
  }

  changeHonba = (newHonba) =>
  {
    this.setState({
      honba: parseInt(newHonba)
    });
  }

  changeHistory = (eventToRemove) =>
  {
    var newHistory = [];
    for (var event = 0; event < this.state.history.length; event++)
    {
      if (event === eventToRemove)
      {
        
        continue;
      }
      else
      {
        newHistory.push(this.state.history[event]);
      }
    }
    this.setState({
      history: newHistory
    });
  }

  render()
  {
    return (
      <div className="transactionviewswrapper">
        <div className="transactionviews">
          <ViewTabs index={this.state.index} onClick={this.changeTab}>
            <div className="tab">Small Transactions</div>
            <div className="tab">Score Table</div>
            <div className="tab">Limit Hands</div>
            <div className="tab">Custom Input</div>
            <div className="tab">History</div>
            <div className="tabcontent">
              <SmallTransactionsButtons onClick={this.props.onClick} />
            </div>
            <div className="tabcontent">
              <ScoringTable transactionConfirmation={this.askToConfirmTransaction} honba={this.state.honba} />
            </div>
            <div className="tabcontent">
              <LimitHands transactionConfirmation={this.askToConfirmTransaction} honba={this.state.honba} />
            </div>
            <div className="tabcontent">
              <CustomInput points={this.state.points} onClick={this.props.onClick} />
            </div>
            <div className="tabcontent">
              <History history={this.state.history} onClick={this.changeHistory} />
            </div>
          </ViewTabs>
        </div>
        {(this.state.index === 1 || this.state.index === 2) ?
          <IncreaseDecrease value={this.state.honba} minimum="0" increment="1" label="Honba" onClick={this.changeHonba} />
          : null }
        {(this.state.confirmPopup.show ? <ConfirmTransactionPopup
                                            table={this.state.confirmPopup.table}
                                            handsize={this.state.confirmPopup.handSize}
                                            payment={this.state.confirmPopup.payment}
                                            paymentEast={this.state.confirmPopup.paymentEast} 
                                            paymentOther={this.state.confirmPopup.paymentOther}
                                            honba={this.state.confirmPopup.honba} 
                                            onClick={this.confirmationClick} /> : null)}
      </div>
    );
  }
}

export default TransactionViews;