import React, { useEffect, useState } from 'react';
import "./dropZoneTimer.css";

const DropZoneTimer = () => {

    const getTimeDifference = () => {
        const dropZoneDate = new Date("2022-08-22 24:00:00").getTime();
        const timeDifference = dropZoneDate - new Date().getTime();

        let timerObj = {};

        if(timeDifference > 0) { 
            let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            timerObj = {
                days: days.toString().length > 1 ? days : `0${days}`,
                hours: hours.toString().length > 1 ? hours : `0${hours}`,
                minutes: minutes.toString().length > 1 ? minutes : `0${minutes}`,
                seconds: seconds.toString().length > 1 ? seconds : `0${seconds}`
            };
        }
        return timerObj;
    }

    const [dropZoneTimer, setDropZoneTimer] = useState(getTimeDifference()); 


    useEffect(() => {
        setTimeout(() => {
            setDropZoneTimer(getTimeDifference());
        }, 1000);

        return () => clearTimeout();
    }, [dropZoneTimer]);

    return(
        <div className="dropZoneTimer__container">
            <div className="dropZoneTime__time-text-container">
                <div className="dropZoneTime__time-container">
                    <div className="dropZoneTime__time">{dropZoneTimer.days.toString().split("")[0]}</div>
                    <div className="dropZoneTime__time">{dropZoneTimer.days.toString().split("")[1]}</div>
                </div>
                <div className="dropZoneTime__text">DAYS</div>
            </div>
            <div className="dropZoneTime__time-text-container">
                <div className="dropZoneTime__time-container">
                    <div className="dropZoneTime__time">{dropZoneTimer.hours.toString().split("")[0]}</div>
                    <div className="dropZoneTime__time">{dropZoneTimer.hours.toString().split("")[1]}</div>
                </div>
                <div className="dropZoneTime__text">HOURS</div>
            </div>
            <div className="dropZoneTime__time-text-container">
                <div className="dropZoneTime__time-container">
                    <div className="dropZoneTime__time">{dropZoneTimer.minutes.toString().split("")[0]}</div>
                    <div className="dropZoneTime__time">{dropZoneTimer.minutes.toString().split("")[1]}</div>
                </div>
                <div className="dropZoneTime__text">MINS</div>
            </div>
            <div className="dropZoneTime__time-text-container">
                <div className="dropZoneTime__time-container">
                    <div className="dropZoneTime__time">{dropZoneTimer.seconds.toString().split("")[0]}</div>
                    <div className="dropZoneTime__time">{dropZoneTimer.seconds.toString().split("")[1]}</div>
                </div>
                <div className="dropZoneTime__text">SECS</div>
            </div>
            {/* {dropZoneTimer?.days + ':' + dropZoneTimer?.hours + ':' + dropZoneTimer?.minutes + ':' + dropZoneTimer?.seconds} */}
        </div>
    )
}

export default DropZoneTimer;