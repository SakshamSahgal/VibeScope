import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

function ImageDisplay({ activityArray, sliderValue, Name }) {
    const [Quality, setQuality] = useState("Low");

    const ToggleQuality = () => {
        setQuality(Quality === "Low" ? "High" : "Low");
    };

    const qualityPath = Quality === "High" ? "HighQuality" : "LowQuality";

    return (
        <div className="container">
            <div className="row">
                <div className="img-container" style={{ maxHeight: '80vh', overflow: 'hidden' }}>
                    <img
                        src={`${axios.defaults.baseURL}/${Name}/${qualityPath}/${activityArray[sliderValue]}.${Quality === "High" ? "png" : "jpg"}`}
                        alt={`Image ${sliderValue}`}
                        className="img-fluid"
                    />
                </div>
            </div>
            <div className="row my-2">
                <Form className='d-flex justify-content-center'>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="HD Quality"
                        checked={Quality === "High"}
                        onChange={ToggleQuality}
                    />
                </Form>
            </div>
        </div>
    );
}

export default ImageDisplay;
