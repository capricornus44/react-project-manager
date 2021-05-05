import React from 'react';
import { getSprints } from '../../../redux/sprints/sprintOperations';
import SprintsListItem from '../sprintsListItem/SprintsListItem';

const SprintsList = () => {
    console.dir(getSprints())
    return (
        <>
            <ul className="sprint-list">
                <SprintsListItem />
            </ul>
        </>
    );
};

export default SprintsList;