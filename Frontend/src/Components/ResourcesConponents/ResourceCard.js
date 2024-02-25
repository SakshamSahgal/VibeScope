import { Button } from "react-bootstrap"
import { AxiosPUT } from "../../Scripts/AxiosRequest";
import { useState } from "react";
import Cookies from "js-cookie";

function ResourceCard({ Heading, APIPath }) {

    const [data, setData] = useState({});

    const SendDataToServer = async () => {
        console.log(data);
        const response = await AxiosPUT(APIPath, { data: data }, Cookies.get('token'));
        console.log(response);
    }

    console.log(data);

    // update the state when the user types in the input
    const handleInputChange = (e) => {
        setData(e.target.value);
    };

    return (
        <>
            <div className="card shadow my-3 mx-3">
                <div className="card-header text-center">
                    <h5>{Heading}</h5>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h6>Enter Here..</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <textarea className="form-control bg-dark text-white" rows="3" onChange={handleInputChange}>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <div className="container">

                        <div className="row">
                            <div className="col-12">
                                <Button onClick={SendDataToServer}> Save ✏️</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ResourceCard;