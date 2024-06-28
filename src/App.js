import React, { useState } from 'react';
import './App.css';
import ReportGenerator from './Component/ReportGenerator';
import ReportFormat from './Component/ReportFormat.jsx';
import Demo from './Component/demo.tsx';

function App() {
  return (
    <div className="App">
      <div className='flx-right'>
        <div className='title'>
          <div>
            <h1>Report Portal</h1>
          </div>
        </div>
        <ReportGenerator />
      </div>
      {/* <Demo /> */}
    </div>
  );
}

export default App;
