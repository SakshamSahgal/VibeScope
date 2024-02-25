import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const PlayModal = ({ imageSources, Quality, targetName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState((1 / imageSources.length) * 100);

  const loadNextImage = () => {
    if (currentIndex < imageSources.length - 1) {
      setLoadingProgress(((currentIndex + 2) / imageSources.length) * 100);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      // setIsModalOpen(false);
    }
  };

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const currentImageSrc = axios.defaults.baseURL + '/' + targetName + '/' + Quality + '/' + imageSources[currentIndex] + (Quality === 'HighQuality' ? '.png' : '.jpg');


  return (
    <div>
      <Button variant="primary" onClick={handlePlayClick} className='h-100 w-100'>
        <FontAwesomeIcon icon={faPlay} />
      </Button>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} size="xl" className='my-3 mx-3 d-flex align-items-center'>
        <Modal.Header closeButton>
          <Modal.Title>Activity Play</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={currentImageSrc}
            alt={`Image ${currentIndex + 1}`}
            style={{
              maxWidth: '100%', // Make sure the image doesn't exceed the modal content width
              maxHeight: '80vh', // Limit the image height to 80% of the viewport height
              width: 'auto', // Ensures the image doesn't stretch to fit the container
              height: 'auto', // Ensures the image doesn't stretch to fit the container
            }}
            onLoad={loadNextImage}
          />
          <ProgressBar
            now={loadingProgress}
            label={`${loadingProgress}%`}
            style={{ width: '100%', marginTop: '10px' }}
          />
        </Modal.Body>
        {/* You can add additional modal content or controls here */}
        <Modal.Footer>
          <div>Current Image Source: {currentImageSrc}</div>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default PlayModal;
