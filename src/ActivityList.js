import React from "react";
import Activity from "./Activity";
import "./ActivityList.css";

function ActivityList({ activities = [] }) {
  if (activities && activities.length) {
    return (
      <ul className="activity-list">
        {activities.map((activity, index) => (
          <Activity key={index} {...activity} />
          
        ))}
      </ul>
    );
  }
  return null;
}

export default ActivityList;
