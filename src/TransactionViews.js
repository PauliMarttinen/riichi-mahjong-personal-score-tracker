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

//Confirmation popup.
import ConfirmTransactionPopup from './ConfirmTransactionPopup.js';

class TransactionViews extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      index: 1,
      confirmPopup: {
        show: false,
        table: 0,
        honba: 0,
        payment: 0,
        paymentEast: 0,
        paymentOther: 0
      }
    };
  }

  changeTab = (newTab) =>
  {
    this.setState(
      {
        index: newTab
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
        paymentOther: button.dataset.paymentother
      }
    });
  }

  confirmationClick = (button) =>
  {
    if (button.name !== "cancel")
    {
      this.props.onClick(button);
    }
    this.setState({
      confirmPopup: {
        show: false,
        honba: 0,
        table: 0,
        payment: 0,
        paymentEast: 0,
        paymentOther: 0
      }
    });
  }

  render()
  {
    return (
      <div>
        <div className="transactionviews">
          <ViewTabs index={this.state.index} onClick={this.changeTab}>
            <div className="tab">Small Transactions</div>
            <div className="tab">Score Table</div>
            <div className="tab">Limit Hands</div>
            <div className="tab">Custom Input</div>
            <div className="tabcontent">
              <SmallTransactionsButtons onClick={this.props.onClick} />
            </div>
            <div className="tabcontent">
              <ScoringTable transactionConfirmation={this.askToConfirmTransaction} />
            </div>
            <div className="tabcontent">
              <LimitHands transactionConfirmation={this.askToConfirmTransaction} />
            </div>
            <div className="tabcontent">
              <CustomInput points={this.props.points} onClick={this.props.onClick}/>
            </div>
          </ViewTabs>
        </div>
        {(this.state.confirmPopup.show ? <ConfirmTransactionPopup
                                            table={this.state.confirmPopup.table}
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