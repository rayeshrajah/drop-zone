import React, { useEffect, useState } from 'react';

const DropZoneTimer = () => {
    const dropZoneDate = new Date();
    const dateNow = new Date();
    const [dropZoneDay, setDropZoneDay] = useState(dropZoneDate.getDate() + 13);
    const [dropZoneHour, setDropZoneHour] = useState(dropZoneDate.getHours() + 8);
    const [dropZoneMin, setDropZoneMin] = useState(dropZoneDate.getMinutes() + 12);
    const [dropZoneSec, setDropZoneSec] = useState(dropZoneDate.getSeconds() + 5);

    const timer = () => {
        setInterval(() => {
            setDropZoneDay();
        }, 1000)
    }

    useEffect(() => {

    }, [])

    return(
        <div className='DropZoneTimer__container'>

        </div>
    )
}

export default DropZoneTimer;