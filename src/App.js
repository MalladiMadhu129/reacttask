// src/App.js
import React, { useEffect, useState } from 'react';
import Tabs from './components/Tabs';
import TabContent from './components/TabContent';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('presentation');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/assets/data.json') 
    .then((response) => response.json())
   
    .then((jsonData) => {
      setData(jsonData.data.items.transcript_data);
      console.log('dhwwli',jsonData.data.items.transcript_data)
      
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error loading JSON:', error);
      setLoading(false);
    });
}, []);

const handleTabClick = (tabName) => {
  setActiveTab(tabName);
  console.log('activeTab',activeTab)
};

return (
  <div className="App">
    <h1>Angular React Task</h1>
    <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
    {loading ? <Loading /> : <TabContent activeTab={activeTab} data={data} />}
  </div>
);
}

export default App;
