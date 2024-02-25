import React, { useState, useEffect } from "react";
import Badge from 'react-bootstrap/Badge';
import Cookies from 'js-cookie';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { AxiosGET } from "../Scripts/AxiosRequest";



function SizeBar() {
    const [size, setSize] = useState([]);

    const fetchData = async () => {
        const response = await AxiosGET("/getUploadsSizeOnDisk", {}, Cookies.get('token'))
        setSize(response)
    };

    useEffect(() => {
        fetchData();
    }, []);

    const totalSize = size.TotalSizeInBytes;
    const filledSize = size.AlreadyFilledSizeinBytes;
    const uploadSize = size.uploadSizeInBytes;
    const availableSize = size.availableSizeInBytes;

    const filledPercentage = (filledSize / totalSize) * 100;
    const uploadPercentage = (uploadSize / totalSize) * 100;
    const availablePercentage = (availableSize / totalSize) * 100;

    const formatSize = (bytes) => {
        if (bytes < 1024) {
            return `${bytes} B`;
        } else if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(2)} KB`;
        } else if (bytes < 1024 * 1024 * 1024) {
            return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
        } else {
            return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
        }
    };

    return (
        <div>
            <div className="container bg-success bg-opacity-25 shadow">
                <div className="py-3">
                    <ProgressBar className="my-3">
                        <ProgressBar
                            variant="primary"
                            now={filledPercentage}
                            label={`Filled: ${filledPercentage.toFixed(2)}%`}
                            style={{ color: 'black' }}
                            key={1}
                        />
                        <ProgressBar
                            variant="danger"
                            now={uploadPercentage}
                            label={`Uploads: ${uploadPercentage.toFixed(2)}%`}
                            style={{ color: 'black' }}
                            key={2}
                        />
                        <ProgressBar
                            variant="light"
                            now={availablePercentage}
                            label={`Available: ${availablePercentage.toFixed(2)}%`}
                            style={{ color: 'black' }}
                            key={3}
                        />
                    </ProgressBar>
                </div>
                <div className="row mx-1">
                    <Button variant="primary" className="my-3" onClick={fetchData}>
                        <FontAwesomeIcon icon={faSync} />
                    </Button>
                </div>
                <div className="row d-flex align-items-center rounded-lg">
                    <div className="col-sm-12 text-center col-lg-3 col-md-6">
                        <h4>
                            <Badge bg="secondary"> <b>Total Size: </b> {formatSize(totalSize)}</Badge>
                        </h4>
                    </div>
                    <div className="col-sm-12 text-center col-lg-3 col-md-6">
                        <h4>
                            <Badge bg="primary"> <b>Filled Size: </b>  {formatSize(filledSize)}</Badge>
                        </h4>
                    </div>
                    <div className="col-sm-12 text-center col-lg-3 col-md-6">
                        <h4>
                            <Badge bg="danger"> <b>Upload Size: </b>  {formatSize(uploadSize)}</Badge>
                        </h4>
                    </div>
                    <div className="col-sm-12 text-center col-lg-3 col-md-6">
                        <h4>
                            <Badge bg="light" text="dark"> <b>Available Size: </b>  {formatSize(availableSize)}</Badge>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SizeBar;
