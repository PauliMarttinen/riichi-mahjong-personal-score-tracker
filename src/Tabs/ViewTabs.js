import React from 'react';

import './ViewTabs.css';

class ViewTabs extends React.Component
{
  render()
  {
    return (
      <div className="viewtabs-container">
        {this.props.children.map((value, index) =>
          {
            if (value.type.name === "Tab")
            {
              if (parseInt(value.props.index) === parseInt(this.props.index))
              {
                return (
                  <div className="viewtabs-tab viewtabs-selected">
                    {value.props.children}
                  </div>
                );
              }
              else
              {
                return (
                  <div className="viewtabs-tab" data-index={value.props.index} onClick={e => this.props.onClick(e.target.dataset.index)}>
                    {value.props.children}
                  </div>
                )
              }
            }
            else if (value.type.name === "TabContent" && parseInt(value.props.index) === parseInt(this.props.index))
            {
              return (
                <div className="viewtabs-content">
                  {value.props.children}
                </div>
              );
            }
          })}
      </div>
    );
  }
}

export default ViewTabs;