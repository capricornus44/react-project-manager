const DatePagination = ({
  counter,
  setCounter,
  duration,
  curDate,
  startSprintDate,
}) => {
  const getMs = value => new Date(value).getTime();

  return (
    <>
      {Date.now() + 2 * 60 * 60 * 1000 >= getMs(startSprintDate) &&
        Date.now() + 2 * 60 * 60 * 1000 <=
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
