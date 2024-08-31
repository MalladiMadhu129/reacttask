
import React from 'react';

const TabContent = ({ activeTab, data }) => {
    console.log('data',data)
    console.log('presentation',data.presentation)
  if (!data) return <div>No data available</div>;  
// console.log('data.transcript_data',data.transcript_data)
  const { presentation = [], questions_and_answers = [], participants = {} } = data;
  
  const renderContent = () => {
    
    switch (activeTab) {
      case 'presentation':
        return (
          <div>
            {presentation.map((item, index) => (
              <div key={index}>
                <h3>{item.participant_name} ({item.participant_designation},{item.participant_company})</h3>
                {item.transcript_data.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        );
      case 'qa':
        return (
          <div>
            {questions_and_answers.map((qa, index) => (
              <div key={index}>
                <h4>{qa.participant_name} ({qa.designation})</h4>
                {qa.transcript_data.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        );
      case 'executives':
        return (
          <div>
            {participants.executives?.map((executive, index) => (
              <div key={index}>
                <h4>{executive.name}</h4>
                <p>{executive.company} - {executive.designation}</p>
              </div>
            )) || <p>No executives data available</p>}
          </div>
        );
      case 'analyst':
        return (
          <div>
            {participants.analyst?.map((analyst, index) => (
              <div key={index}>
                <h4>{analyst.name}</h4>
                <p>{analyst.company} - {analyst.designation}</p>
              </div>
            )) || <p>No analyst data available</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="tab-content">{renderContent()}</div>;
};

export default TabContent;
