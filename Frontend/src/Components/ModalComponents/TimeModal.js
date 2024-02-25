import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { NameToTime } from '../../Scripts/TimeFunctions';
import { NameToTimeElapsed } from '../../Scripts/TimeFunctions';

const TimeModal = ({ activityArray }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className='w-100 h-100'>
        Time Range
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Time Range</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className='fs-6'>Earliest Activity Stored</h6>
                  </div>
                  <div className="card-body">
                    <p>{NameToTime(activityArray[0])}</p>
                    <p>{NameToTimeElapsed(activityArray[0])}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className='fs-6'>Last Activity Stored</h6>
                  </div>
                  <div className="card-body">
                    <p>{NameToTime(activityArray[activityArray.length - 1])}</p>
                    <p>{NameToTimeElapsed(activityArray[activityArray.length - 1])}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TimeModal;
