import React from 'react';
import './ResponseDisplay.css';

const ResponseDisplay = ({ data, selectedOptions }) => {
  const selectedValues = selectedOptions.map(option => option.value);
  let filteredData = {
    Numbers: [],
    'Highest Alphabet': '',
  };

  data.forEach(item => {
    if (selectedValues.includes('Numbers') && !isNaN(item)) {
      filteredData.Numbers.push(item);
    }
    if (selectedValues.includes('Highest Alphabet') && /[A-Za-z]/.test(item)) {
      filteredData['Highest Alphabet'] = item > filteredData['Highest Alphabet'] ? item : filteredData['Highest Alphabet'];
    }
  });

  return (
    <div className="response-display">
      <h2>Filtered Response</h2>
      {selectedValues.includes('Numbers') && (
        <p>Numbers: {filteredData.Numbers.join(', ')}</p>
      )}
      {selectedValues.includes('Highest Alphabet') && (
        <p>Highest Alphabet: {filteredData['Highest Alphabet']}</p>
      )}
    </div>
  );
};

export default ResponseDisplay;
