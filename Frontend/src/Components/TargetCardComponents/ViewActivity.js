import { useState } from "react";
import ActivityModal from "../ModalComponents/ActivityModal";
import { AxiosGET } from "../../Scripts/AxiosRequest";
import Cookies from 'js-cookie';

function ViewActivity({Name}) {

    const [isModalVisible, setModalVisibility] = useState(false);
    const [activityArray, setActivityArray] = useState([]);
    const [sizeInBytes, setSizeInBytes] = useState(0);

    const viewActivity = async () => {
        console.log("fetching activity data for " + Name)
        let data = await AxiosGET('/getActivity/' + Name,{}, Cookies.get('token'))
        console.log(data)
        setActivityArray(data.files)
        setSizeInBytes(data.sizeInBytes)
        setModalVisibility(!isModalVisible)
    }

    const closeModal = () => {
        setModalVisibility(false);
    }

    return (
        <>
            <button className="btn btn-primary w-100" onClick={viewActivity}>👁️ View Activity </button>
            <ActivityModal targetName={Name} sizeInBytes={sizeInBytes} isVisible={isModalVisible} closeModal={closeModal} activityArray={activityArray} viewActivity={viewActivity}/>
        </>
    )
}

export default ViewActivity;