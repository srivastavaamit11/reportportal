// import React from 'react';
// import { Table } from 'antd';

// export enum Columns {
//   Teams = "Teams",
//   EpicDevelopedDelivered = "Epic developed & delivered",
//   NoOfStoriesDelivered = "No of stories delivered (not a part of epic)",
//   NoOfBugsFixed = "No of Bugs fixed by developers",
//   AutomationScriptsAdded = "Automation scripts added",
//   NoOfAutomationScriptsAdded = "No of Automation scripts added",
//   BugsRaised = "Bugs Raised",
//   OtherTasks = "Others tasks (POCS, tech task, documentation)"
// }

// const columns = [
//   {
//     title: Columns.Teams,
//     dataIndex: 'teams',
//     key: 'teams',
//     width: 100,
//     fixed: 'left',
//   },
//   {
//     title: 'Epic Info',
//     children: [
//       {
//         title: Columns.EpicDevelopedDelivered,
//         dataIndex: 'epicDevelopedDelivered',
//         key: 'epicDevelopedDelivered',
//         width: 150,
//       },
//       {
//         title: Columns.NoOfStoriesDelivered,
//         dataIndex: 'noOfStoriesDelivered',
//         key: 'noOfStoriesDelivered',
//         width: 150,
//       },
//     ],
//   },
//   {
//     title: 'Bug Info',
//     children: [
//       {
//         title: Columns.NoOfBugsFixed,
//         dataIndex: 'noOfBugsFixed',
//         key: 'noOfBugsFixed',
//         width: 150,
//       },
//       {
//         title: Columns.BugsRaised,
//         dataIndex: 'bugsRaised',
//         key: 'bugsRaised',
//         width: 150,
//       },
//     ],
//   },
//   {
//     title: 'Automation Info',
//     children: [
//       {
//         title: Columns.AutomationScriptsAdded,
//         dataIndex: 'automationScriptsAdded',
//         key: 'automationScriptsAdded',
//         width: 150,
//       },
//       {
//         title: Columns.NoOfAutomationScriptsAdded,
//         dataIndex: 'noOfAutomationScriptsAdded',
//         key: 'noOfAutomationScriptsAdded',
//         width: 150,
//       },
//     ],
//   },
//   {
//     title: Columns.OtherTasks,
//     dataIndex: 'otherTasks',
//     key: 'otherTasks',
//     width: 150,
//   },
// ];

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

// const Demo = () => (
//   <Table
//     columns={columns}
//     dataSource={data}
//     scroll={{ x: 1500, y: 300 }} // Adjust as needed for your layout
//   />
// );

// export default Demo;

