const DatePagination = ({
  counter,
  setCounter,
  duration,
  curDate,
  startSprintDate,
}) => {
  // console.log(`new Date`, new Date(curDate).getTime());
  // console.log();
  const getMs = value => new Date(value).getTime();
  const normDate = value =>
    value ? value?.split('-').reverse().join('.') : curDate;

  // console.log('stSpr', Number(getMs(normDate(startSprintDate))));
  // console.log('cur date', getMs(curDate));

  // console.log(`curDate`, new Date(curDate));
  // console.log(
  //   `startSprintDate`,
  //   startSprintDate ? new Date(startSprintDate) : null,
  // );
  // console.log(
  //   'test',
  //   getMs(normDate(startSprintDate)),
  //   // startSprintDate?.split('-').reverse(),
  //   // .map(item => `${item}`.padStart(2, '0')
  // );
  // console.log('getMs(curDate)', getMs(curDate));
  // console.log('getMs(startSprintDate)', getMs(startSprintDate));
  // console.log(
  //   'getms + dur',
  //   getMs(startSprintDate) + duration * 24 * 60 * 60 * 1000,
  // );
  // console.log('duration', duration);
  return (
    <>
      {getMs(curDate) >= getMs(startSprintDate) &&
        getMs(curDate) <=
          getMs(startSprintDate) + duration * 24 * 60 * 60 * 1000 && (
          <div className="sprintsPageHeader__dates">
            <button
              disabled={counter <= 0}
              onClick={() => setCounter(prev => prev - 1)}
              type="button"
              className="sprintsPageHeader__dates_btn"
            >
              &#9668;
            </button>
            <p>
              <span className="sprintsPageHeader__dates_curDay">
                {counter + 1}
              </span>
              /<span className="sprintsPageHeader__dates_days">{duration}</span>
            </p>
            <button
              disabled={counter >= duration - 1}
              onClick={() => setCounter(prev => prev + 1)}
              type="button"
              className="sprintsPageHeader__dates_btn"
            >
              &#9658;
            </button>
            <p className="sprintsPageHeader__date">{curDate}</p>
          </div>
        )}
    </>
  );
};

export default DatePagination;
