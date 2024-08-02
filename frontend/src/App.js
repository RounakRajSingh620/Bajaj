import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Dropdown from './components/dropdown';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleDataSubmit = (responseData) => {
    setData(responseData.data);
  };

  const dropdownOptions = [
    { value: 'Numbers', label: 'Numbers' },
    { value: 'Highest Alphabet', label: 'Highest Alphabet' }
  ];

  return (
    <div className="App">
      <TextInput onSubmit={handleDataSubmit} />
      <Dropdown options={dropdownOptions} onChange={setSelectedOptions} />
      <ResponseDisplay data={data} selectedOptions={selectedOptions} />
    </div>
  );
};

export default App;
