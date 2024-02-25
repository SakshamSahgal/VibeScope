function convertIsoToNormalTime(isoTimeString) {
    const isoTime = new Date(isoTimeString);

    const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    const formattedDate = isoTime.toLocaleString(undefined, dateOptions);
    const formattedTime = isoTime.toLocaleString(undefined, timeOptions);

    return {
        date: formattedDate,
        time: formattedTime,
    };
}

function getTimeElapsed(isoTimeString) {
    const isoTime = new Date(isoTimeString);
    const currentTime = new Date();

    const elapsedMilliseconds = currentTime - isoTime;
    const seconds = Math.floor(elapsedMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
}

function NameToTime(FileName) {
    // console.log(new Date(parseInt(((FileName).split("_")[1]).split(".")[0])))
    let thisDate = new Date(parseInt(((FileName).split("_")[1]).split(".")[0]))
    return thisDate.toLocaleString()
}

// Function to format the time since last active
function formatLastActive(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    const formattedTime = [];

    if (days > 0) {
        formattedTime.push(`${days} days`);
    }
    if (hours > 0) {
        formattedTime.push(`${hours} hours`);
    }
    if (minutes > 0) {
        formattedTime.push(`${minutes} minutes`);
    }
    if (seconds > 0) {
        //round to 2 decimal places
        seconds = Math.round(seconds * 100) / 100;
        formattedTime.push(`${seconds} seconds ago`);
    }

    return formattedTime.join(' & ');
}


function NameToTimeElapsed(FileName){
    let thisDate = new Date(parseInt(((FileName).split("_")[1]).split(".")[0]))
    let seconds = (new Date() - thisDate) / 1000;
    return formatLastActive(seconds)
}

export { convertIsoToNormalTime, getTimeElapsed, NameToTime, NameToTimeElapsed };