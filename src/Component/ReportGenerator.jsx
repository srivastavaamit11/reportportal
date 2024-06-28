import React, { useState } from 'react';
import '../CSS/ReportGenerator.css';
import ReportFormat from './ReportFormat';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropdown from './Dropdown';
import ApiService from '../Service/service'; // Adjust path as needed

const formatFetchedData = (fetchedData) => {
    // This assumes that fetchedData is an array of arrays where each sub-array contains the response for a particular endpoint
    // Adjust the indices and data extraction logic based on your actual API response structure

    return [
        {
            key: '1',
            teams: 'Common&Content',
            epicDevelopedDelivered: fetchedData[0]?.[0]?.epicDevelopedDelivered ?? 'N/A',
            noOfStoriesDelivered: fetchedData[1]?.length ?? 0,
            noOfBugsFixed: fetchedData[6]?.length ?? 0,
            automationScriptsAdded: fetchedData[3]?.length ?? 0,
            noOfAutomationScriptsAdded: fetchedData[4] ?? 0,
            bugsRaised: fetchedData[5]?.length ?? 0,
            otherTasks: 'Documentation', // This can be dynamically set as needed
        },
        {
            key: '2',
            teams: 'Mobile',
            epicDevelopedDelivered: fetchedData[0]?.[1]?.epicDevelopedDelivered ?? 'N/A',
            noOfStoriesDelivered: fetchedData[1]?.length ?? 0,
            noOfBugsFixed: fetchedData[6]?.length ?? 0,
            automationScriptsAdded: fetchedData[3]?.length ?? 0,
            noOfAutomationScriptsAdded: fetchedData[4] ?? 0,
            bugsRaised: fetchedData[5]?.length ?? 0,
            otherTasks: 'POC', // This can be dynamically set as needed
        },
        {
            key: '3',
            teams: 'Grapeleaf',
            epicDevelopedDelivered: fetchedData[0]?.[2]?.epicDevelopedDelivered ?? 'N/A',
            noOfStoriesDelivered: fetchedData[1]?.length ?? 0,
            noOfBugsFixed: fetchedData[6]?.length ?? 0,
            automationScriptsAdded: fetchedData[3]?.length ?? 0,
            noOfAutomationScriptsAdded: fetchedData[4] ?? 0,
            bugsRaised: fetchedData[5]?.length ?? 0,
            otherTasks: 'Tech Task', // This can be dynamically set as needed
        },
    ];
};

const ReportGenerator = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [datasource, setDatasource] = useState([]);

    const handleGenerateReport = () => {
        const apiService = new ApiService(startDate, endDate);

        apiService.fetchData().then(data => {
            console.log("Data fetched : ", data);
            const formattedData = formatFetchedData(data);

            setDatasource(formattedData); // Update datasource with fetched data
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            setDatasource([]); // Clear datasource or handle error state
        });
    };

    return (
        <div className="report-generator">
            <div className="controls">
                <Dropdown />
                <div>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select a start date"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select an end date"
                    />
                </div>
                <button className="generate-report" onClick={handleGenerateReport}>
                    Generate Report
                </button>
            </div>
            <ReportFormat data={datasource} /> {/* Pass datasource as prop to ReportFormat */}
            <div className="export">
                <button className="export-button">Export to Excel</button>
            </div>
        </div>
    );
};

export default ReportGenerator;
