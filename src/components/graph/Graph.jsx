import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getAllSprints } from '../../redux/sprints/sprintSelectors';
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

// SBC - 46 Красная линия - идеальная линия спринта,
//   рисуется по такой логике: Находим сумму всех часов,
//   делим на количество дней спринта и создаем массив
// с числами такого формата[250, 230, 210, 190]
// Каждое следующее число это предыдущее минус(сумма часов / количество дней спринта)

// SBC - 47 Синяя линия - фактическая линия спринта,
//   рисуется по такой логике: 1) Находим сумму часов потраченных
// на задачи за конкретную дату. 2) Отнимаем это число от остатка
// предыдущего дня(Если это первый день - отнимает от общей суммы оценочных часов)
// В результате получаем массив с числами[250, 232, 228, ....]
const Graph = () => {
  const getAll = useSelector(getAllSprints);

  const plannedLine = () => {
    getAll.reduce((acc, getAll) => acc + getAll.hoursPlanned, 0);
  };
  //const otherDayPlannedLine=()=>{(сумма часов / количество дней спринта)}
  //const otherDayFactLine=()=>{фактическая линия-=остаток предыдущего дня}
  const months = [
    '',
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const data = {
    // labels: result,
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
        data: [65, 59, 80, 81, 56, 55, 40], //[plannedLine,...otherDayFactLine]
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
        data: [300, 250, 200, 150, 100, 50, 0], //[plannedLine,...otherDayPlannedLine]
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
