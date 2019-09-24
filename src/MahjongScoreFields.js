//This component is the two ways to display a player's score: absolute and relative.
//
//Absolute points here mean the amount of points that a player's scoring sticks display.
//Relative points mean absolute points minus the starting points.

import React from 'react';
import './MahjongScoreFields.css';

function MahjongScoreFields()
{
    return (
    <div>
        <div className="MahjongScoreField" name="AbsolutePoints">aa</div>
        <div className="MahjongScoreField" name="RelativePoints">aa</div>
    </div>);
}

export default MahjongScoreFields;