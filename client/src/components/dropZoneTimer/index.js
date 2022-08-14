import React, {useEffect, useState } from 'react'
import { getTimeDifference } from '../../utils/timer';
import "./dropZoneTimer.css";

const DropZoneTimer = ({date}) => {

    const [dropZoneDays, setDropZoneDays] = useState(getTimeDifference(date).days.toString().length > 1 ? getTimeDifference(date).days: `0${getTimeDifference(date).days}`);
    const [dropZoneHours, setDropZoneHours] = useState(getTimeDifference(date).hours.toString().length > 1 ? getTimeDifference(date).hours : `0${getTimeDifference(date).hours}`);
    const [dropZoneMins, setDropZoneMins] = useState(getTimeDifference(date).minutes.toString().length > 1 ? getTimeDifference(date).minutes : `0${getTimeDifference(date).minutes}`);
    const [dropZoneSecs, setDropZoneSecs] = useState(getTimeDifference(date).seconds.toString().length > 1 ? getTimeDifference(date).seconds : `0${getTimeDifference(date).seconds}`);

    useEffect(() => {
        setTimeout(() => {
            const {days, hours, minutes, seconds} = getTimeDifference(date);
            setDropZoneDays(days.toString().length > 1 ? days : `0${days}`);
            setDropZoneHours(hours.toString().length > 1 ? hours : `0${hours}`);
            setDropZoneMins(minutes.toString().length > 1 ? minutes : `0${minutes}`);
            setDropZoneSecs(seconds.toString().length > 1 ? seconds : `0${seconds}`);
        }, 1000);

        return () => clearTimeout(getTimeDifference);

    }, [dropZoneDays, dropZoneHours, dropZoneMins, dropZoneSecs, date]);

    return(
        <div className="dropZoneTimer__container">
            <div className="dropZoneTimer__time-text-container">
                <div className="dropZoneTimer__time-container">
                    {
                        dropZoneDays?.toString().split("").map((el, index) => {
                            return(
                                <div key={index} className="dropZoneTimer__time">{el}</div>
                            )
                        })
                    }
                </div>
                <div className="dropZoneTimer__text">Days</div>
            </div>
            <div className="dropZoneTimer__time-text-container">
                <div className="dropZoneTimer__time-container">
                    <div className="dropZoneTimer__time">{dropZoneHours?.toString().split("")[0]}</div>
                    <div className="dropZoneTimer__time">{dropZoneHours?.toString().split("")[1]}</div>
                </div>
                <div className="dropZoneTimer__text">Hours</div>
            </div>
            <div className="dropZoneTimer__time-text-container">
                <div className="dropZoneTimer__time-container">
                    <div className="dropZoneTimer__time">{dropZoneMins?.toString().split("")[0]}</div>
                    <div className="dropZoneTimer__time">{dropZoneMins?.toString().split("")[1]}</div>
                </div>
                <div className="dropZoneTimer__text">Mins</div>
            </div>
            <div className="dropZoneTimer__time-text-container">
                <div className="dropZoneTimer__time-container">
                    <div className="dropZoneTimer__time">{dropZoneSecs?.toString().split("")[0]}</div>
                    <div className="dropZoneTimer__time">{dropZoneSecs?.toString().split("")[1]}</div>
                </div>
                <div className="dropZoneTimer__text">Secs</div>
            </div>
        </div>
    )
}

export default DropZoneTimer;