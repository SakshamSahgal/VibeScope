import { AxiosDELETE } from '../../Scripts/AxiosRequest';
import Cookies from 'js-cookie';

function DeleteList({ targetName, deleteList, setDeleteList, viewActivity, setSliderValue }) {

    const onDeleteAll = async () => {
        const response = await AxiosDELETE('/deleteImage/' + targetName, deleteList, Cookies.get('token'));
        console.log(response);
        viewActivity()
        setSliderValue(0)
        setDeleteList([])
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {deleteList.map((image, index) => {
                    return (
                        <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                            <div className="card">
                                <div className="card-header fs-9">
                                    {image}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="row my-3">
                {deleteList.length > 0 && (
                    <button className="btn btn-danger w-100" onClick={onDeleteAll}>  Delete All </button>
                )}
            </div>
        </div>
    )
}

export default DeleteList;