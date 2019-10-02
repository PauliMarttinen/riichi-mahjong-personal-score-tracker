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
import TabContent from './Tabs/TabContent.js';
import Tab from './Tabs/Tab.js';

//For the transaction buttons.
import SmallTransactionsButtons from './SmallTransactionsButtons.js';
import LimitHands from './LimitHands.js';
import ScoringTable from './ScoringTable.js';
import CustomInput from './CustomInput.js';

//Confirmation popup.
import ConfirmTransactionPopup from './ConfirmTransactionPopup.js';

//App info.
import AppInfo from './AppInfo.js';

const styles = {
  tabs: {
    background: '#fff',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  slide4: {
    backgroundColor: '#FF6AC0',
  },
  slide5: {
    backgroundColor: '#B3C04A',
  },
};

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
    const {index} = this.state;

    return (
      <div className="transactionviews">
        <ViewTabs index={this.state.index} onClick={this.changeTab}>
          <Tab index="0">Small Transactions</Tab>
          <Tab index="1">Score Table</Tab>
          <Tab index="2">Limit Hands</Tab>
          <Tab index="3">Custom Input</Tab>
          <Tab index="4">App Info</Tab>
          <TabContent index="0">
            <SmallTransactionsButtons onClick={this.props.onClick} />
          </TabContent>
          <TabContent index="1">
            <ScoringTable transactionConfirmation={this.askToConfirmTransaction} />
          </TabContent>
          <TabContent index="2">
            <LimitHands transactionConfirmation={this.askToConfirmTransaction} />
          </TabContent>
          <TabContent index="3">
            <CustomInput points={this.props.points} onClick={this.props.onClick}/>
          </TabContent>
          <TabContent index="4">
            <AppInfo />
          </TabContent>
        </ViewTabs>
        {(this.state.confirmPopup.show ? <ConfirmTransactionPopup
                                           table={this.state.confirmPopup.table}
                                           payment={this.state.confirmPopup.payment}
                                           paymentEast={this.state.confirmPopup.paymentEast} 
                                           paymentOther={this.state.confirmPopup.paymentOther}
                                           honba={this.state.confirmPopup.honba} 
                                           onClick={this.confirmationClick} /> : null)}
      </div>
    );

    /* return(
      <div class="transactionviews">
        <Tabs value={index} onChange={this.changeTab} style={styles.tabs}>
          <Tab label="Small transactions" />
          <Tab label="Scoring table" />
          <Tab label="Limit hands" />
          <Tab label="Custom input" />
          <Tab label="Info" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.changeView}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <SmallTransactionsButtons onClick={this.props.onClick} />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <ScoringTable transactionConfirmation={this.askToConfirmTransaction} />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <LimitHands transactionConfirmation={this.askToConfirmTransaction} />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide4)}>
            <CustomInput points={this.props.points} onClick={this.props.onClick}/>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide5)}>
            <AppInfo />
          </div>
        </SwipeableViews>
        {(this.state.confirmPopup.show ? <ConfirmTransactionPopup
                                           table={this.state.confirmPopup.table}
                                           payment={this.state.confirmPopup.payment}
                                           paymentEast={this.state.confirmPopup.paymentEast} 
                                           paymentOther={this.state.confirmPopup.paymentOther}
                                           honba={this.state.confirmPopup.honba} 
                                           onClick={this.confirmationClick} /> : null)}
      </div>
    ) */
  }
}

export default TransactionViews;