import React from 'react';
import './TitleProjectDescription.scss';

const TitleProjectDetails = ({ description }) => {
  return (
    <>
      <p className="project__title-details__text">{description}</p>
    </>
  );
};

export default TitleProjectDetails;
