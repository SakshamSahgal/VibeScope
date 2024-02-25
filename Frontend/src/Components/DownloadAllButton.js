import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import { AxiosGETWithCustomHeaders } from '../Scripts/AxiosRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DownloadAllButton() {

  const downloadEntireData = async () => {

    const data = await AxiosGETWithCustomHeaders("/downloadAllData", {
      headers: { Authorization: 'Bearer ' + Cookies.get('token') },
      responseType: 'blob'
    });
    const blob = new Blob([data], { type: 'application/zip' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'uploads.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <button className="btn btn-dark w-100" onClick={downloadEntireData}>
      <FontAwesomeIcon icon={faDownload} /> &nbsp; Download Entire Data &nbsp;
    </button>
  );

}

export default DownloadAllButton;

