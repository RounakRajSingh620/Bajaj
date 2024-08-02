import React from 'react';
import Select from 'react-select';
import './Dropdown.css';

const Dropdown = ({ options, onChange }) => {
    return (
        <Select
            isMulti
            options={options}
            onChange={onChange}
            className="multi-select"
            classNamePrefix="select"
        />
    );
};

export default Dropdown;
