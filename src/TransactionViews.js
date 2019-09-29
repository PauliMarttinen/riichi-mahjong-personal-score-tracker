//This component is the three kinds of transactions in swipeable tabs:
// - Small but common transactions (1000/1500 points)
// - Scoring table for most of the other transactions
// - Limit hands for the bigger transactions.
//
//If you have them all in one screen, the screen gets cluttered. Separating them in swipeable tabs will
//probably make it a ton easier to use and nicer to look at.

import React from 'react';

//For the swipeable views
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

//For the transaction buttons.
import SmallTransactionsButtons from './SmallTransactionsButtons.js';
import LimitHands from './LimitHands.js';
import ScoringTable from './ScoringTable.js';

//Confirmation popup.
import ConfirmTransactionPopup from './ConfirmTransactionPopup.js';

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
};

class TransactionViews extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      index: 2,
      confirmPopup: {
        show: false,
        table: 0,
        payment: 0
      }
    };
  }

  changeTab = (event, value) =>
  {
    this.setState(
      {
        index: value
      }
    );
  }

  changeView = index =>
  {
    this.setState(
      {
        index
      }
    );
  };

  askToConfirmTransaction = (button) =>
  {
    this.setState({
      confirmPopup: {
        show: true,
        table: button.dataset.table,
        payment: button.dataset.payment
      }
    });
  }

  render()
  {
    const {index} = this.state;

    return(
      <div>
        <Tabs value={index} fullWidth onChange={this.changeTab} style={styles.tabs}>
          <Tab label="Small transactions"></Tab>
          <Tab label="Scoring table"></Tab>
          <Tab label="Limit hands"></Tab>
          <Tab label="Custom input"></Tab>
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.changeView}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <SmallTransactionsButtons onClick={this.props.onClick} />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <ScoringTable />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <LimitHands transactionConfirmation={this.askToConfirmTransaction} />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide4)}>
            Custom input goes here.
          </div>
        </SwipeableViews>
        {(this.state.confirmPopup.show ? <ConfirmTransactionPopup table={this.state.confirmPopup.table} payment={this.state.confirmPopup.payment} /> : null)}
      </div>
    )
  }
}

export default TransactionViews;