import React, { useState } from 'react';

const Dropdown = () => {
  // State to hold the selected option
  const [selectedOption, setSelectedOption] = useState('Engineering');

  // Handler for change event
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select id="departments" value={selectedOption} onChange={handleChange}>
        <option value="Engineering">Engineering</option>
        <option value="Support">Support</option>
        <option value="Documentation">Documentation</option>
      </select>
    </div>
  );
};

export default Dropdown;
