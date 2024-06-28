import React from 'react';
import { Table } from 'antd';
import { Columns } from './constants.tsx';  // Use the correct import path

const columns = [
  {
    title: `${Columns.Teams}`,
    dataIndex: 'teams',
    key: 'teams',
    width: 150,
    fixed: 'left',
  },
  {
    title: Columns.EpicDevelopedDelivered,
    dataIndex: 'epicDevelopedDelivered',
    key: 'epicDevelopedDelivered',
    width: 150,
  },
  { 
    title: Columns.NoOfStoriesDelivered,
    dataIndex: 'noOfStoriesDelivered',
    key: 'noOfStoriesDelivered',
    width: 150,
  },
  {
    title: Columns.NoOfBugsFixed,
    dataIndex: 'noOfBugsFixed',
    key: 'noOfBugsFixed',
    width: 150,
  },
  {
    title: Columns.AutomationScriptsAdded,
    dataIndex: 'automationScriptsAdded',
    key: 'automationScriptsAdded',
    width: 150,
    render: (text, record, index) => {
      if (index % 3 === 0) {
        return {
          children: text,
          props: {
            rowSpan: 3,
          },
        };
      }
      return {
        children: text,
        props: {
          rowSpan: 0,
        },
      };
    },
  },
  {
    title: Columns.NoOfAutomationScriptsAdded,
    dataIndex: 'noOfAutomationScriptsAdded',
    key: 'noOfAutomationScriptsAdded',
    width: 150,
    render: (text, record, index) => {
      if (index % 3 === 0) {
        return {
          children: text,
          props: {
            rowSpan: 3,
          },
        };
      }
      return {
        children: text,
        props: {
          rowSpan: 0,
        },
      };
    },
  },
  {
    title: Columns.BugsRaised,
    dataIndex: 'bugsRaised',
    key: 'bugsRaised',
    width: 150,
    render: (text, record, index) => {
      if (index % 3 === 0) {
        return {
          children: text,
          props: {
            rowSpan: 3,
          },
        };
      }
      return {
        children: text,
        props: {
          rowSpan: 0,
        },
      };
    },
  },
  {
    title: Columns.OtherTasks,
    dataIndex: 'otherTasks',
    key: 'otherTasks',
    width: 150,
    editable : true,
    render: (text, record, index) => {
      if (index % 3 === 0) {
        return {
          children: text,
          props: {
            rowSpan: 3,
          },
        };
      }
      return {
        children: text,
        props: {
          rowSpan: 0,
        },
      };
    },
  },
];

// const data = [
//   {
//     key: '1',
//     teams: 'Common&Content',
//     epicDevelopedDelivered: 'Epic 1',
//     noOfStoriesDelivered: 10,
//     noOfBugsFixed: 5,
//     automationScriptsAdded: 3,
//     noOfAutomationScriptsAdded: 2,
//     bugsRaised: 1,
//     otherTasks: 'Documentation',
//   },
//   {
//     key: '2',
//     teams: 'Mobile',
//     epicDevelopedDelivered: 'Epic 2',
//     noOfStoriesDelivered: 8,
//     noOfBugsFixed: 4,
//     automationScriptsAdded: 2,
//     noOfAutomationScriptsAdded: 1,
//     bugsRaised: 0,
//     otherTasks: 'POC',
//   },
//   {
//     key: '3',
//     teams: 'Grapeleaf',
//     epicDevelopedDelivered: 'Epic 3',
//     noOfStoriesDelivered: 12,
//     noOfBugsFixed: 6,
//     automationScriptsAdded: 4,
//     noOfAutomationScriptsAdded: 3,
//     bugsRaised: 2,
//     otherTasks: 'Tech Task',
//   },
// ];

const ReportFormat = ({data}) => (
  
  <Table
    columns={columns}
    dataSource={data}
    scroll={{ x: 1500, y: 300 }} 
  />
);

export default ReportFormat;
