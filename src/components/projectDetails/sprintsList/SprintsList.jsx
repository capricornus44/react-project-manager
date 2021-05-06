import React from 'react';
import SprintsListItem from '../sprintsListItem/SprintsListItem';
import "./SprintsList.scss"

const SprintsList = () => {
    return (
        <>
            <ul className="sprint-list">
                <SprintsListItem />
            </ul>
        </>
    );
};

export default SprintsList;
