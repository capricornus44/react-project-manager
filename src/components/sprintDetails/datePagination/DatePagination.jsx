const DatePagination = ({ counter, setCounter, duration, curDate }) => {
  return (
    <div className="sprintsPageHeader__dates">
      <button
        onClick={() => setCounter(prev => prev - 1)}
        type="button"
        className="sprintsPageHeader__dates_btn"
      >
        &#9668;
      </button>
      <p>
        <span className="sprintsPageHeader__dates_curDay">{counter + 1}</span>/
        <span className="sprintsPageHeader__dates_days">{duration}</span>
      </p>
      <button
        onClick={() => setCounter(prev => prev + 1)}
        type="button"
        className="sprintsPageHeader__dates_btn"
      >
        &#9658;
      </button>
      <p className="sprintsPageHeader__date">{curDate}</p>
    </div>
  );
};

export default DatePagination;
