import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function DownloadFrameButton({targetName, activityArray, sliderValue}) {

    const downloadImage = async () => {
        try {
            const imageUrl = process.env.REACT_APP_SERVER_HOSTED_ON + '/' + targetName + '/' + activityArray[sliderValue];
            const response = await fetch(imageUrl);
            const blob = await response.blob();

            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = activityArray[sliderValue];
            link.click();
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    };

    return (
        <button type="button" className="btn btn-primary w-100 h-100" onClick={downloadImage}>
            <FontAwesomeIcon icon={faDownload} className="me-2" />
        </button>
    )
}

export default DownloadFrameButton;