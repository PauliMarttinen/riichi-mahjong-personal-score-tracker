import React from 'react';

import formatPoints from './FormatPoints.js';

class ConfirmHistoryPopup extends React.Component
{

  render()
  {
    var direction;
    if (parseInt(this.props.amount) < 0)
    {
      direction = "Paid";
    }
    else if (parseInt(this.props.amount) > 0)
    {
      direction = "Received";
    }
    return (
      <div>
        <div className="popupbackdrop"></div>
        <div className="confirmhistorypopup popup">
          <h1 className="confirmhistorypopup title">Remove transaction from history</h1>
          <table>
            <tbody>
              <tr className={"historyevent " + direction.toLowerCase()}>
                <td>{parseInt(this.props.event) + 1}</td>
                <td>{direction}</td>
                <td>{formatPoints(this.props.amount, false)}</td>
              </tr>
            </tbody>
          </table>
          <button className="cancel" onClick={e => this.props.onClick(-1)}>Cancel</button>
          <button className="confirm" onClick={e => this.props.onClick(parseInt(this.props.event))}>Confirm</button>
        </div>
      </div>
    );
  }
}

export default ConfirmHistoryPopup;