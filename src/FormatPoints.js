import React from 'react';

function formatPoints(points, showSign = true)
{
  var sign;
  if (!showSign)
  {
    sign = "";
    if (points < 0)
    {
      points = -points;
    }
  }
  else
  {
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
  }
  return <span className="points">{sign}{points/100}<span className="hundreds">00</span></span>;
}

export default formatPoints;