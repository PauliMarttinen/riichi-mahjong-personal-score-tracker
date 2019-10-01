import React from 'react';

class TabContent extends React.Component
{
  render()
  {
    return (
      <div className="viewtabs-tabcontent">
        {this.props.children}
      </div>
    );
  }
}

export default TabContent;