import React, {useEffect, useState} from 'react';

const AddSprintData = ({cb}) => {
    const [data, setData] = useState({ title: "", endDate: "2021-12-31", duration: "1" })
    const { title, endDate, duration } = data

    const handleChange = e => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }
    
    useEffect(() => {
        cb({title,endDate,duration})
    }, [title, endDate, duration])
    

    return (
        <>
            <input type="text" name="title" value={title} required onChange={handleChange}/>
        <input type="date" name="endDate" value={endDate} required onChange={handleChange}/>
        <input type="number" name="duration" value={duration} required onChange={handleChange}/>
        </>
    );
};

export default AddSprintData;