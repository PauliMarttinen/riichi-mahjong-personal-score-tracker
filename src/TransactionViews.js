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
      index: 3,
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

    return(
      <div class="transactionviews">
        <Tabs value={index} fullWidth onChange={this.changeTab} style={styles.tabs}>
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
    )
  }
}

export default TransactionViews;