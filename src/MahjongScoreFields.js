//This component is the two ways to display a player's score: absolute and relative.
//
//Absolute points here mean the amount of points that a player's scoring sticks display.
//Relative points mean absolute points minus the starting points.

import React from 'react';
import './MahjongScoreFields.css';

export class MahjongScoreFields extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { points: this.props.initialPoints };
    }
//remember to update the points with
//  this.setState({points: blahblah});
//instead of
//  this.state.points = blahblah;

    formatPoints(points)
    {
        var sign;
        if (points > 0)
        {
            sign = "+";
        }
        else if (points < 0)
        {
            sign = "-";
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
                <div className="MahjongScoreField" name="AbsolutePoints">{this.formatPoints(this.state.points)}</div>
                <div className="MahjongScoreField" name="RelativePoints">{this.formatPoints(this.state.points - this.props.initialPoints)}</div>
            </div>
        );
    }
}

export default MahjongScoreFields;