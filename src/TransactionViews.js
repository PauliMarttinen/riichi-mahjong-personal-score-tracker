//This component is the three kinds of transactions in swipeable tabs:
// - Small but common transactions (1000/1500 points)
// - Scoring table for most of the other transactions
// - Limit hands for the bigger transactions.
//
//If you have them all in one screen, the screen gets cluttered. Separating them in swipeable tabs will
//probably make it a ton easier to use and nicer to look at.

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import SmallTransactionsButtons from './SmallTransactionsButtons.js';

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
};

class TransactionViews extends React.Component
{
  state = {
    index: 1
  };

  handleChange = (event, value) =>
  {
    this.setState(
      {
        index: value
      }
    );
  }

  handleChangeIndex = index =>
  {
    this.setState(
      {
        index
      }
    );
  };

  render()
  {
    const {index} = this.state;

    return(
      <div>
        <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
          <Tab label="Small transactions"></Tab>
          <Tab label="Scoring table"></Tab>
          <Tab label="Limit hands"></Tab>
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <SmallTransactionsButtons />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            Scoring Table goes here
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            Limit hands go here.
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

export default TransactionViews;