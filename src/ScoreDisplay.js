//This component is the two ways to display a player's score: absolute and relative.
//
//Absolute points here mean the amount of points that a player's scoring sticks display. Absolute points are
//the player's real points applied to a specified zeropoint, usually called the starting points.
//
//Relative points are the player's real points. In reality, a game of Riichi Mahjong starts from zero points,
//but since players routinely go below their starting score, and negative points are a hassle to represent
//with physical sticks, it's common to just add 30,000 to the each player's score and call that their score.

import React from 'react';
import formatPoints from './FormatPoints.js';
import './ScoreDisplay.css';

class ScoreDisplay extends React.Component
{
    render()
    {
        return (
            <div>
                <div className="ScoreDisplay" name="AbsolutePoints">{formatPoints(parseInt(this.props.zeroPoint) + parseInt(this.props.points))}</div>
                <div className="ScoreDisplay" name="RelativePoints">{formatPoints(parseInt(this.props.points))}</div>
            </div>
        );
    }
}

export default ScoreDisplay;