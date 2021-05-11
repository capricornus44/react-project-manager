import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { getTasksSelector } from '../../redux/tasks/taskSelectors';
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

const Graph = () => {
  const tasks = useSelector(getTasksSelector);
  const sprints = useSelector(getAllSprints);
  console.log(sprints);
  const planedHours = tasks.reduce(
    (acc, task) => (acc += task.hoursPlanned),
    0,
  );
  const duration = sprints.duration;
  //sprints[1].duration; // кол-во дней спринта
  const deltaHours = (planedHours / duration) // tasks[0].hoursWastedPerDay.length
    .toFixed(4);
  // console.log('planedHours :>> ', planedHours);
  // console.log('deltaHours :>> ', deltaHours);

  const wastedByTask = tasks.map(task =>
    task.hoursWastedPerDay.reduce((acc, task) => {
      acc.push(task.singleHoursWasted);
      return acc;
    }, []),
  );

  let myPlanedTasksHours = planedHours;
  const arr = wastedByTask.reduce((acc, task, ind) => {
    const result = wastedByTask.reduce((acc, task) => {
      acc += task[ind];
      return acc;
    }, 0);
    acc.push(myPlanedTasksHours - result < 0 ? 0 : myPlanedTasksHours - result);
    myPlanedTasksHours = myPlanedTasksHours - result;
    return acc;
  }, []);
  console.log('result :>> ', arr);
  // ==== Plannedline
  const getStreightLine = () => {
    const arr = [planedHours];
    let prev = planedHours;
    for (let i = 0; i < duration; i += 1) {
      arr.push(prev - deltaHours);
      prev = prev - deltaHours;
    }
    return arr;
  };
  console.log('get :>> ', getStreightLine());
  // ====
  // data: [planedHours, ...arr],
  // const arr2 = wastedByTask.reduce((acc, task, ind) => {
  //   const result = wastedByTask.reduce((acc, task) => {
  //     acc += task[ind];
  //     return acc;
  //   }, 0);
  //   acc.push(result);
  //   return acc;
  // }, []);

  console.log('wastedByTask :>> ', wastedByTask);
  const getDatesArray = () => {
    return tasks.map(task => {
      return task.hoursWastedPerDay.reduce((acc, task) => {
        acc.push(task.currentDay);
        return acc;
      }, []);
    });
  };

  const data = {
    labels: [
      'заплановано',
      ...getDatesArray(), //[0]
      //сюда дни
    ],
    // labels: [...period.day],
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
        data: [...getStreightLine()],

        // data: [7, 6, 6, 3, 1, 5, 0],
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
        // data: [...period.hours],
        data: [planedHours, ...arr],
        // data: [300, 250, 200, 150, 100, 50, 0], //[plannedLine,...otherDayPlannedLine]
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

// const tasks = [
//   {
//     planed: 7,
//     wasted: 9,
//     wastedPerDay: [
//       { date: "dfgh", singleWasted: 4 },
//       { date: "efd", singleWasted: 2 },
//       { date: "dfasdsagh", singleWasted: 3 },
//     ],
//   },
//   {
//     planed: 6,
//     wasted: 5,
//     wastedPerDay: [
//       { date: "dsfsdfgh", singleWasted: 3 },
//       { date: "efsdfd", singleWasted: 1 },
//       { date: "dfassdfsdsagh", singleWasted: 1 },
//     ],
//   },
//   {
//     planed: 7,
//     wasted: 9,
//     wastedPerDay: [
//       { date: "dfgh", singleWasted: 4 },
//       { date: "efd", singleWasted: 2 },
//       { date: "dfasdsagh", singleWasted: 3 },
//     ],
//   },
// ];
// const planedHours = tasks.reduce((acc, task) => (acc += task.planed), 0);
// const deltaHours = (planedHours / tasks[0].wastedPerDay.length).toFixed(4);
// console.log("planedHours :>> ", planedHours);
// console.log("deltaHours :>> ", deltaHours);
// const wastedByTask = tasks.map((task) =>
//   task.wastedPerDay.reduce((acc, task) => {
//     acc.push(task.singleWasted);
//     return acc;
//   }, [])
// );
// console.log("wastedByTask :>> ", wastedByTask);
// let myPlanedTasksHours = planedHours;
// const arr = wastedByTask.reduce((acc, task, ind) => {
//   const result = wastedByTask.reduce((acc, task) => {
//     acc += task[ind];
//     return acc;
//   }, 0);
//   acc.push(myPlanedTasksHours - result < 0 ? 0 : myPlanedTasksHours - result);
//   myPlanedTasksHours = myPlanedTasksHours - result;
//   return acc;
// }, []);
// console.log("result :>> ", arr);
// const duration = 3;
// const getStreightLine = () => {
//   const arr = [];
//   let prev = planedHours;
//   for (let i = 0; i < duration; i += 1) {
//     arr.push(prev - deltaHours);
//     prev = prev - deltaHours;
//   }
//   return arr;
// };
// console.log("get :>> ", getStreightLine());
// const arr2 = wastedByTask.reduce((acc, task, ind) => {
//   const result = wastedByTask.reduce((acc, task) => {
//     acc += task[ind];
//     return acc;
//   }, 0);
//   acc.push(result);
//   return acc;
// }, []);
// console.log("result :>> ", arr2);

////////////////////////////=======////////////////////////////////
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
