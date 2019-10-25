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
          <h1 className="confirmhistorypopup title">Confirm history change</h1>
          <table>
            <tbody>
              <tr className={"historyevent " + direction.toLowerCase()}>
                <td>{this.props.event}</td>
                <td>{direction}</td>
                <td>{formatPoints(this.props.amount, false)}</td>
              </tr>
            </tbody>
          </table>
          <button className="cancel" name="cancel">Cancel</button>
          <button className="confirm" name="confirm">Confirm</button>
        </div>
      </div>
    );
  }
}

export default ConfirmHistoryPopup;