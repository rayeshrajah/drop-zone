export const getTimeDifference = (date) => {
    const dropZoneDate = new Date(`${date} 24:00:00`).getTime();
    const timeDifference = dropZoneDate - new Date().getTime();

    if(timeDifference > 0) { 
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        return {days, hours, minutes, seconds};
    }
};