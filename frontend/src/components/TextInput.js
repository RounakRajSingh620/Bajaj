import React, { useState } from 'react';
import axios from 'axios';
import './TextInput.css';

const TextInput = ({ onSubmit }) => {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            JSON.parse(jsonInput); // Validate JSON
            setError('');
            const response = await axios.post('https://bajaj-backend-poq4k4hdi-rounakrajsingh620s-projects.vercel.app/bfhl', JSON.parse(jsonInput));
            onSubmit(response.data);
        } catch (e) {
            setError('Invalid JSON format');
        }
    };

    return (
        <div className="text-input-container">
            <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='Enter JSON data here'
                className="text-input"
            />
            <button onClick={handleSubmit} className="submit-button">Submit</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default TextInput;
