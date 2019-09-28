//This component is the two ways to display a player's score: absolute and relative.
//
//Absolute points here mean the amount of points that a player's scoring sticks display. Absolute points are
//the player's real points applied to a specified zeropoint, usually called the starting points.
//
//Relative points are the player's real points. In reality, a game of Riichi Mahjong starts from zero points,
//but since players routinely go below their starting score, and negative points are a hassle to represent
//with physical sticks, it's common to just add 30,000 to the each player's score and call that their score.

import React from 'react';
import './MahjongScoreFields.css';

export class MahjongScoreFields extends React.Component
{
    formatPoints(points)
    {
        var sign;
        if (points > 0)
        {
            sign = "+";
        }
        else if (points < 0)
        {
            sign = "–";
            points = -points;
        }
        else
        {
            sign = "±";
        }
        return <span className="points">{sign}{points/100}<span className="hundreds">00</span></span>;
    }

    render()
    {
        return (
            <div>
                <div className="MahjongScoreField" name="AbsolutePoints">{this.formatPoints(parseInt(this.props.zeroPoint) + parseInt(this.props.points))}</div>
                <div className="MahjongScoreField" name="RelativePoints">{this.formatPoints(parseInt(this.props.points))}</div>
            </div>
        );
    }
}

export default MahjongScoreFields;