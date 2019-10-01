import React from 'react';

class ViewTabs extends React.Component
{
  render()
  {
    console.log(this.props.children);
    return (
      <div className="viewtabs-container">
        {this.props.children}
      </div>
    );
  }
}

export default ViewTabs;