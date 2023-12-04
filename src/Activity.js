import React from "react";
import "./Activity.css";

/*
   TODO: Add the description
   Activity.js: This file contains the Activity component. You should write code here so that Activity renders the time and description for each activity (e.g., "8:00 am wake up"). It should accept time and description as props.


*/

function Activity({ time = "All Day", description = "Unknown" }) {
   return (
    <li className="activity">
      <div className="time">{time}</div>
      <div className="description">{description}</div>
    </li>
  );
}
export default Activity;
