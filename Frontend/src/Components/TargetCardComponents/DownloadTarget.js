import Cookies from "js-cookie";
import { AxiosGETWithCustomHeaders } from "../../Scripts/AxiosRequest";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function DownloadTargetButton({targetName}) {

    const downLoadTargetActvity = async () => {

        const data = await AxiosGETWithCustomHeaders("/downloadData/" + targetName, {
            headers: { Authorization: 'Bearer ' + Cookies.get('token') },
            responseType: 'blob'
        });
        const blob = new Blob([data], { type: 'application/zip' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${targetName}.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Button variant="dark" className='w-100' onClick={downLoadTargetActvity}>
            <FontAwesomeIcon icon={faDownload} />
        </Button>
    )

}

export default DownloadTargetButton;