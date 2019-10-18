//The view that lists all transactions for historical review purposes and for the purposes of undoing a transaction,
//should the user accidentally enter an incorrect transaction.
//
//Note that the history does not include custom inputs.

import React from 'react';
import formatPoints from './FormatPoints.js';

class History extends React.Component
{
  render()
  {
    var historyDisplay;
    if (this.props.history.length !== 0)
    {
      var historyList = [];
      for (var event = this.props.history.length - 1; event >= 0; event--)
      {
        var direction;
        if (this.props.history[event] < 0)
        {
          direction = "Paid";
        }
        else if (this.props.history[event] > 0)
        {
          direction = "Received";
        }

        historyList.push(
          <tr key={event} className={"historyevent " + direction.toLowerCase()}>
            <td>{event + 1}</td>
            <td>{direction}</td>
            <td>{formatPoints(this.props.history[event], false)}</td>
            <td><button data-event={event} onClick={e => this.props.onClick(parseInt(e.target.dataset.event))}>Undo</button></td>
          </tr>
        );
      }
      historyDisplay = 
        <table className="historytable">
          <tbody>
            {historyList}
          </tbody>
        </table>;
    }
    else
    {
      historyDisplay = <p className="label">No transactions to display.</p>;
    }

    return (
      <div className="history">
        <div className="label">
          Transaction history
        </div>
        {historyDisplay}
      </div>
    );
  }
}

export default History;