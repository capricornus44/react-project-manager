import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTasksSelector } from '../../redux/tasks/taskSelectors';
import { getAllSprints } from '../../redux/sprints/sprintSelectors';

const Graph = () => {
  const tasks = useSelector(getTasksSelector);
  const sprints = useSelector(getAllSprints);
  const { sprintId } = useParams();
  console.log(sprintId);

  const getPlanedHours = () =>
    tasks.reduce((acc, task) => (acc += task.hoursPlanned), 0);
  const duration = sprints.find(sprint => sprint._id === sprintId).duration;
  // console.log(duration);

  //sprints[1].duration; // кол-во дней спринта
  const deltaHours = (getPlanedHours() / duration).toFixed(2); // tasks[0].hoursWastedPerDay.length.toFixed(4);
  // .toFixed(2);

  console.log('deltaHours :>> ', deltaHours);
  const getwastedByTask = () => {
    return tasks.map(task =>
      task.hoursWastedPerDay.reduce((acc, task) => {
        acc.push(task.singleHoursWasted);
        return acc;
      }, []),
    );
  };

  const getPlanedTasksHours = () => {
    let myPlanedTasksHours = getPlanedHours();
    const resultArr = [];
    for (let i = 0; i < duration; i += 1) {
      const result = getwastedByTask().reduce((acc, task) => {
        acc += task[i];
        return acc;
      }, 0);
      resultArr.push(
        myPlanedTasksHours - result < 0 ? 0 : myPlanedTasksHours - result, // + Math.random() * 10
      );
      myPlanedTasksHours = myPlanedTasksHours - result;
    }
    return resultArr;
  };

  const getStreightLine = () => {
    const arr = [getPlanedHours()];
    let prev = getPlanedHours();
    for (let i = 0; i < duration; i += 1) {
      arr.push(prev - deltaHours).toFixed(2);
      prev = prev - deltaHours;
    }
    return arr;
  };

  const getDatesArray = () => {
    // console.log('tasks', tasks);
    return tasks.map(task => {
      return task.hoursWastedPerDay.reduce((acc, task) => {
        acc.push(task.currentDay);
        return acc;
      }, []);
    });
  };

  const data = {
    labels: getDatesArray().length ? ['0', ...getDatesArray()[0]] : [],
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

        data: [getPlanedHours(), ...getPlanedTasksHours()],

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
        data: [...getStreightLine()],

        // data: [300, 250, 200, 150, 100, 50, 0], //[plannedLine,...otherDayPlannedLine]
      },
    ],
  };
  return (
    <>
      {console.log(getPlanedTasksHours())}
      <div className="graph__content">
        <p>Burndown Chart (Calendar Team)</p>
        <Line data={data} width={900} height={450} />
      </div>
    </>
  );
};
export default Graph;

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
//////////////////////////////////////////////////////////////////
