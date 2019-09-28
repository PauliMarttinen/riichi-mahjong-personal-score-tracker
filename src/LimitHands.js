//These are the buttons for the limit hands.

import React from 'react';

class LimitHands extends React.Component
{
  render()
  {
    return (
      <div>
        <table>
          <tbody>
            <tr><td>5</td><td>Mangan</td><td><button>Mangan button</button></td></tr>
            <tr><td>6–7</td><td>Haneman</td><td><button>Haneman button</button></td></tr>
            <tr><td>8–10</td><td>Baiman</td><td><button>Baiman button</button></td></tr>
            <tr><td>11–12</td><td>Sanbaiman</td><td><button>Sanbaiman button</button></td></tr>
            <tr><td>13+</td><td>Yakuman</td><td><button>Yakuman button</button></td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LimitHands;