import { convertIsoToNormalTime } from "../../Scripts/TimeFunctions";
import { getTimeElapsed } from "../../Scripts/TimeFunctions";

function DateTimeActivity(props) {

    return (
        <div className="text-center">
            <hr />
            <h5>{props.Heading}</h5>
            <span className="card-text text-muted">{convertIsoToNormalTime(props.ISOTime).date}</span>
            <span> | </span>
            <span className="card-text text-muted">{convertIsoToNormalTime(props.ISOTime).time}</span>
            <span> | </span>
            <span className="card-text text-muted">{getTimeElapsed(props.ISOTime)}</span>
            <hr />
        </div>
    )
}

export default DateTimeActivity;