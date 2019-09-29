import React from 'react';

class ConfirmTransactionPopup extends React.Component
{
  render()
  {
    return (
      <div className="popup">
        <div>
          Win type: {this.props.table}. Amount: {this.props.payment}
        </div>
        <button>Cancel</button>
        <button>Win as east</button>
        <button>Win as other</button>
        <button>Lose as east</button>
        <button>Lose as other</button>
      </div>
    );
  }
}

export default ConfirmTransactionPopup;