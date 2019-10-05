import React from 'react';

import './ViewTabs.css';

class ViewTabs extends React.Component
{
  render()
  {
    var tabs = [];
    var contents = [];
    var selectedTab = this.props.index;

    for (var child = 0; child < this.props.children.length; child++)
    {
      if (this.props.children[child].props.className === "tab")
      {
        if (parseInt(this.props.index) === child)
        {
          tabs.push(
            <div key={child} className="viewtabs-tab viewtabs-selected">
              {this.props.children[child].props.children}
            </div>
          );
          selectedTab = child;
        }
        else
        {
          tabs.push(
            <div key={child} className="viewtabs-tab" data-index={child} onClick={e => this.props.onClick(e.target.dataset.index)}>
              {this.props.children[child].props.children}
            </div>
          );
        }
      }
      else if (this.props.children[child].props.className === "tabcontent")
      {
        if (child - selectedTab === tabs.length)
        {
          contents.push(
            <div key={child} className="viewtabs-content" data-index={child}>
              {this.props.children[child].props.children}
            </div>
          );
        }
        else
        {
          contents.push(
            <div key={child} className="viewtabs-content invisible" data-index={child}>
              {this.props.children[child].props.children}
            </div>
          );
        }
      }
    }

    return (
      <div className="viewtabs">
        <div className="viewtabs-tabs">
          {tabs}
        </div>
        <div className="viewtabs-content">
          {contents}
        </div>
      </div>
    );
  }
}

export default ViewTabs;