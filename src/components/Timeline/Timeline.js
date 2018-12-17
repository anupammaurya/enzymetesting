import React from 'react';

import Header from './Header'
import ActivityItem from './ActivityItem'
import './Timeline.scss'
// Could be fetched from a server
import activities from '../../data.json';

class Timeline extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline" />
          <div className="content">
            <div className="line"></div>
            {activities && activities.map(activity => (
              <ActivityItem
                key={activity.id}
                activity={activity} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline
