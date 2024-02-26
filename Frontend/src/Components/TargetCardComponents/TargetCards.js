import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

import ViewActivity from "./ViewActivity";
import PermissionsSwitch from "../ModalComponents/PermissionsSwitch"
import DateTimeActivity from "./DateTimeActivity";
import DownloadTargetButton from "./DownloadTarget";
import { toast } from 'react-toastify';

function TargetCards() {

    const [targets, setTargets] = useState([]);

    const fetchTargets = async () => {

        try {
            const response = await axios.get("/getTargets", { withCredentials: true })
            if (response.data.success === false) {
                toast.error(response.data.message)
            }
            else
                setTargets(response.data.targets)
        }
        catch (error) {
            toast.error(`Error fetching Targets : ${error}`)
        }

    }

    useEffect(() => {
        fetchTargets();
    }, []);

    // targets is an array of objects and each object has the following properties:
    // Name, LastContact, FirstContact, EarliestActivityStored, Allowed

    return (
        <>
            <div className="row">
                <Button variant="primary" className="my-3" onClick={fetchTargets}>
                    <FontAwesomeIcon icon={faSync} />
                </Button>
            </div>
            <div className="row">

                {targets.map((target, index) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-4 my-3" key={index}>
                            <div className="card shadow">
                                <div className="card-header text-center">
                                    <h5>{target.Name}</h5>
                                </div>
                                <div className="card-body">

                                    <DateTimeActivity Heading="First Contact" ISOTime={target.FirstContact} />

                                    <div className="d-flex justify-content-center">
                                        <PermissionsSwitch permissions={target.Allowed} Name={target.Name} fetchTargets={fetchTargets} />
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="container">
                                        <div className="row my-3">
                                            <DownloadTargetButton targetName={target.Name} />
                                        </div>
                                        <div className="row">
                                            <ViewActivity Name={target.Name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default TargetCards;