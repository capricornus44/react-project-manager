import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSprints } from '../../../redux/sprints/sprintOperations';
import { getAllSprints } from '../../../redux/sprints/sprintSelectors';
import SprintsListItem from '../sprintsListItem/SprintsListItem';
import "./SprintsList.scss"

const SprintsList = () => {
    const dispatch = useDispatch()
    const allSprints = useSelector(getAllSprints)

    // useEffect(() => {
    //     console.log("2")
    //     dispatch(getSprints())
    // }, [allSprints.length])

    //     useEffect(() => {
    //     // dispatch(getSprints())
    // }, [allSprints.length])

    // console.log(allSprints)

    return (
        <>
            <ul className="sprint-list">
                {allSprints.map(elem =>
                    < SprintsListItem {...elem} />)}
            </ul>
        </>
    );
};

export default SprintsList;
