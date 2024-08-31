
import React from 'react';

const Tabs = ({ activeTab, handleTabClick }) => {
  return (
    <div className="tabs">
      <button onClick={() => handleTabClick('presentation')}>Presentation</button>
      <button onClick={() => handleTabClick('qa')}>Q&A</button>
      <button onClick={() => handleTabClick('executives')}>Corporate Participants</button>
      <button onClick={() => handleTabClick('analyst')}>Conference Call Participants</button>
    </div>
  );
};

export default Tabs;
