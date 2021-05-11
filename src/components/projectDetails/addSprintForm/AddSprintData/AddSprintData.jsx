import React, {useEffect, useState} from 'react';

const AddSprintData = ({cb,projectId}) => {
    const [data, setData] = useState({ title: "", endDate: "2021-12-31", duration: "1" })
    const { title, endDate, duration } = data

    
    useEffect(() => {
        // console.log(projectId)
        cb({title,endDate,duration, projectId})
    }, [title, endDate, duration, projectId])
    
    const handleChange = e => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }
    // const handleSubmit = e => {
    //     // e.preventDefault();
    //     submitSprint({ title, endDate, duration, projectId })
    //     // reset();
    // }

    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
            <input type="text" name="title" value={title} required onChange={handleChange}/>
        <input type="date" name="endDate" value={endDate} required onChange={handleChange}/>
            <input type="number" name="duration" value={duration} required onChange={handleChange} />
            {/* </form> */}
        </>
    );
};

export default AddSprintData;