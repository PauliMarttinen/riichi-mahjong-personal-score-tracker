import React from 'react';

function formatPoints(points)
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

export default formatPoints;