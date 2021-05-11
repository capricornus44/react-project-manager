import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { getTasksSelector } from '../../redux/tasks/taskSelectors';
// [
//   {
//     title: 'Task 1',
//     hoursPlanned: 1,
//     hoursWasted: 0,
//     hoursWastedPerDay: [
//       {
//         currentDay: '2020-12-31',
//         singleHoursWasted: 0,
//       },
//     ],
//     _id: '507f1f77bcf86cd799439011',
//     __v: 0,
//   },
// ];

const Graph = () => {
  const tasksList = useSelector(getTasksSelector);
  console.log(tasksList);

  const plannedHours = tasksList.reduce(
    (acc, task) => acc + task.hoursPlanned,
    0,
  );

  const getPeriodPlanned = (days, hours) => {
    const deltaPlanned = hours / days;
    return Array(days + 1) //передаем кол-во дней спринта
      .fill('')
      .map((elem, index) => ({
        day: index,
        hours: deltaPlanned * index,
      }));
  };

  const period = getPeriodPlanned(6, plannedHours).reduce((acc, elem) => {
    if (!acc.day) {
      return { day: [elem.day], hours: [elem.hours] };
    }
    acc.day.push(elem.day);
    acc.hours.unshift(elem.hours.toFixed(1));
    return acc;
  }, {});

  const data = {
    // labels: [1, 2, 3],
    labels: [...period.day],
    datasets: [
      {
        label: 'Actual remaining labor in hours',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'white',
        borderColor: 'dodgerblue',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'dodgerblue',
        pointBackgroundColor: 'dodgerblue',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        //data: [...period.hours],
        data: [7, 6, 6, 3, 1, 5, 0],
      },

      {
        label: 'Planned remaining work in hours',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'white',
        borderColor: 'orangered',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'orangered',
        pointBackgroundColor: 'orangered',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'orangered',
        pointHoverBorderColor: 'orangered',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [...period.hours],
        //data: [300, 250, 200, 150, 100, 50, 0], //[plannedLine,...otherDayPlannedLine]
      },
    ],
  };
  return (
    <>
      <div className="graph__content">
        <p>Burndown Chart (Calendar Team)</p>
        <Line data={data} width={900} height={450} />
      </div>
    </>
  );
};
export default Graph;

// const planedHours = 100;
// const days = 7;
// const delta = planedHours / days;
// const planed = Array(days + 1)
//   .fill('')
//   .map((_, idx, arr) => ({
//     day: idx,
//     hours: Math.ceil(delta * (arr.length - 1 - idx)),
//   }));
// console.log('base :>> ', planed);
// const hoursArr = [0, 15, 25, 3];
// const finishedArr = hoursArr.map((el, idx, arr) => {
//   if (!idx) return el;
//   return arr.filter((el, i) => i <= idx).reduce((acc, el) => acc + el, 0);
// });
// console.log('finishedArr :>> ', finishedArr);
// const getChart = (planed, hoursArr) => {
//   return planed
//     .map(({ day, hours }, idx, arr) => {
//       if (!idx) return { day, hours };
//       if (hoursArr[idx]) {
//         const diff = planedHours - hoursArr[idx];
//         return { day, hours: diff };
//       }
//       if (idx === arr.length - 1) return { day, hours };
//     })
//     .filter(el => el);
// };
// console.log('getChart() :>> ', getChart(planed, finishedArr));

// const getPeriodPlanned = (days, hoursPlanned) => {
//   const deltaPlanned = hoursPlanned / days;
//   return Array(days + 1) //передаем кол-во дней спринта
//     .fill('')
//     .map((elem, index) => ({
//       day: index,
//       hoursPlanned: deltaPlanned * index,
//     }));
// };
// const period = getPeriodPlanned(6, 100).reduce((acc, elem) => {
//   if (!acc.day) {
//     return { day: [elem.day], hoursPlanned: [elem.hoursPlanned] };
//   }
//   acc.day.push(elem.day);
//   acc.hoursPlanned.unshift(Math.round(elem.hoursPlanned));
//   return acc;
// }, {});
//  data: [...period.hoursPlanned]

// const getPeriod = (days, hours) => {
//     const deltaPlan = hours / days;
//     return Array(days + 1) //передаем кол-во дней спринта
//         .fill('')
//         .map((elem, index) => ({ day: index, hours: deltaPlan * index }));
// };
// const period = getPeriod(6, 100).reduce((acc, elem) => {
//     if (!acc.day) {
//         return { day: [elem.day], hours: [elem.hours] };
//     }
//     acc.day.push(elem.day);
//     acc.hours.unshift(Math.round(elem.hours));

//     return acc;
// }, {});
// // console.log(period);
// // console.log([...period.hours]);

// const chartLine = () => {
//     setChartData({
//         labels: [
//             ...period.day,
//             //сюда дни
//         ],

// const plannedLine = () => {
//   getAll.reduce((acc, getAll) => acc + getAll.hoursPlanned, 0);
// };

// const getPeriodPlanned = (days, hoursPlanned) => {
//   const deltaPlanned = hoursPlanned / days;
//   return Array(days + 1) //передаем кол-во дней спринта
//     .fill('')
//     .map((elem, index) => ({
//       day: index,
//       hoursPlanned: deltaPlanned * index,
//     }));
// };
// const otherDayPlannedLine = () => {};
//const otherDayFactLine=()=>{фактическая линия-=остаток предыдущего дня}
// const months = [
//   '',
//   'JAN',
//   'FEB',
//   'MAR',
//   'APR',
//   'MAY',
//   'JUN',
//   'JUL',
//   'AUG',
//   'SEP',
//   'OCT',
//   'NOV',
//   'DEC',
// ];
// const getDatesArray = () => {
//   return getAll.map(task => {
//     return task.hoursWastedPerDay.reduce((acc, task) => {
//       acc.push(task.currentDay);
//       return acc;
//     }, []);
//   });
// };

// const getData = async () => {
//   let hours = plannedHours;
//   const getHoursArr = tasks.map(task => {
//     return task.hoursWastedPerDay.reduce((acc, singleTask) => {
//       acc.push(singleTask.singleHoursWasted);
//       return acc;
//     }, []);
//   });
//   console.log('getHoursArr :>> ', getHoursArr);
//   // получить все даты
//   // const sprints = await axios.get(
//   //     `https://sbc-backend.goit.global/sprint/609639ea33a36061e804ec19`,
//   // );
//   // console.log('sprints :>> ', sprints);
//   // const sprintsDates = sprints.data.sprints.map(
//   //     ({ startDate, duration }) => ({
//   //         startDate,
//   //         duration,
//   //     }),
//   // );
//   // console.log('sprintsDates :>> ', sprintsDates);
//   // формируем даты
// };
