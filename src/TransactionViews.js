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
import Manipulate from './Manipulate.js';

import IncreaseDecrease from './IncreaseDecrease.js';

//Confirmation popups.
import ConfirmTransactionPopup from './ConfirmTransactionPopup.js';
import ConfirmHistoryPopup from './ConfirmHistoryPopup.js';

class TransactionViews extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      index: 1,
      honba: 0,
      points: this.props.points,
      history: [],
      confirmTransactionPopup: {
        show: false,
        table: 0,
        honba: 0,
        payment: 0,
        paymentEast: 0,
        paymentOther: 0,
        handSize: ""
      },
      confirmHistoryPopup: {
        show: false,
        event: 0
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
      confirmTransactionPopup: {
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

  askToConfirmHistoryChange = (event) =>
  {
    this.setState({
      confirmHistoryPopup: {
        show: true,
        event: event
      }
    });
  }

  transactionConfirmationClick = (direction, amount) =>
  {
    var honba = this.state.honba;
    if (direction !== "cancel")
    {
      this.props.onClick(direction, amount);
      if (direction !== "custom")
      {
        this.addTransactionToHistory(direction, amount);
      }
      honba = 0;
    }
    
    this.setState({
      honba: honba,
      confirmTransactionPopup: {
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

  makeSmallTransaction = (direction, amount) =>
  {
    this.addTransactionToHistory(direction, amount);
    this.props.onClick(direction, amount);
  }

  addTransactionToHistory = (direction, amount) =>
  {
    var history = this.state.history;
    if (direction === "pay")
    {
      history.push(-amount);
    }
    else
    {
      history.push(amount);
    }
    this.setState({
      history: history
    });
  }

  changeHonba = (newHonba) =>
  {
    this.setState({
      honba: parseInt(newHonba)
    });
  }

  historyConfirmationClick = (eventToRemove) =>
  {
    if (eventToRemove !== -1)
    {
      var newHistory = [];
      for (var event = 0; event < this.state.history.length; event++)
      {
        if (event === eventToRemove)
        {
          this.props.onClick("custom", this.props.points - this.state.history[event]);
          continue;
        }
        else
        {
          newHistory.push(this.state.history[event]);
        }
      }
      this.setState({
        history: newHistory,
        confirmHistoryPopup: {
          show: false,
          event: 0
        }
      });
    }
    else
    {
      this.setState({
        confirmHistoryPopup: {
          show: false,
          event: 0
        }
      });
    }
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
            <div className="tab">Manipulate</div>
            <div className="tabcontent">
              <SmallTransactionsButtons onClick={this.makeSmallTransaction} />
            </div>
            <div className="tabcontent">
              <ScoringTable transactionConfirmation={this.askToConfirmTransaction} honba={this.state.honba} />
            </div>
            <div className="tabcontent">
              <LimitHands transactionConfirmation={this.askToConfirmTransaction} honba={this.state.honba} />
            </div>
            <div className="tabcontent">
              <Manipulate points={this.state.points} onCustomClick={this.props.onClick} history={this.state.history} historyConfirmation={this.askToConfirmHistoryChange} />
            </div>
          </ViewTabs>
        </div>
        {(this.state.index === 1 || this.state.index === 2) ?
          <IncreaseDecrease value={this.state.honba} minimum="0" increment="1" label="Honba" onClick={this.changeHonba} />
          : null }
        {(this.state.confirmTransactionPopup.show ? <ConfirmTransactionPopup
                                            table={this.state.confirmTransactionPopup.table}
                                            handsize={this.state.confirmTransactionPopup.handSize}
                                            payment={this.state.confirmTransactionPopup.payment}
                                            paymentEast={this.state.confirmTransactionPopup.paymentEast} 
                                            paymentOther={this.state.confirmTransactionPopup.paymentOther}
                                            honba={this.state.confirmTransactionPopup.honba} 
                                            onClick={this.transactionConfirmationClick} /> : null)}
        {(this.state.confirmHistoryPopup.show ? <ConfirmHistoryPopup
                                            event={this.state.confirmHistoryPopup.event}
                                            amount={this.state.history[this.state.confirmHistoryPopup.event]}
                                            onClick={this.historyConfirmationClick} /> : null)}
      </div>
    );
  }
}

export default TransactionViews;