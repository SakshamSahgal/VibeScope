import { useState } from "react";
import ActivityModal from "../ModalComponents/ActivityModal";
import axios from "axios";
import { toast } from "react-toastify";


function ViewActivity({ Name }) {

    const [isModalVisible, setModalVisibility] = useState(false);
    const [activityArray, setActivityArray] = useState([]);
    const [sizeInBytes, setSizeInBytes] = useState(0);

    const viewActivity = async () => {
        console.log("fetching activity data for " + Name)
        try {
            let data = await axios.get('/getActivity/' + Name, { withCredentials: true })
            console.log(data)
            setActivityArray(data.files)
            setSizeInBytes(data.sizeInBytes)
            setModalVisibility(!isModalVisible)
        }
        catch (error) {
            toast.error("Error fetching activity data for " + Name + " : " + error)
        }
    }

    const closeModal = () => {
        setModalVisibility(false);
    }

    return (
        <>
            <button className="btn btn-primary w-100" onClick={viewActivity}>👁️ View Activity </button>
            <ActivityModal targetName={Name} sizeInBytes={sizeInBytes} isVisible={isModalVisible} closeModal={closeModal} activityArray={activityArray} viewActivity={viewActivity} />
        </>
    )
}

export default ViewActivity;