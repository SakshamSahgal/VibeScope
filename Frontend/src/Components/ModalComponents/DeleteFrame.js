import { faTrash,faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DeleteFrameButton({deleteList, setDeleteList, activityArray, sliderValue, setSliderValue}) {

    const DeleteImage = async () => {

        if (!deleteList.includes(activityArray[sliderValue])) {
            if (sliderValue != activityArray.length - 1) {
                setSliderValue(sliderValue + 1);
            }
            console.log("adding image to delete list " + activityArray[sliderValue])
            setDeleteList([...deleteList, activityArray[sliderValue]]);
        }
        else {
            console.log("removing image from delete list " + activityArray[sliderValue])
            setDeleteList(deleteList.filter(item => item !== activityArray[sliderValue])); //filter returns a new array with the filtered items
        }
    }

    if(deleteList.includes(activityArray[sliderValue])) {
       return (
            <button type="button" className="btn btn-danger w-100 h-100" id="deleteFrameButton" onClick={DeleteImage}>
                <FontAwesomeIcon icon={faTrashRestore} className="me-2" /> { /*  trash restore icon */}
            </button>
        )
    }
    else
    {
        return (
            <button type="button" className="btn btn-danger w-100 h-100" id="deleteFrameButton" onClick={DeleteImage}>
                <FontAwesomeIcon icon={faTrash} className="me-2" /> { /* regular trash icon */}
            </button>
        )
    }
}

export default DeleteFrameButton;