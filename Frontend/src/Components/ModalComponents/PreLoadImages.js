import axios from "axios";
import { Button } from "react-bootstrap";


// imageUrls is an array of image urls

const PreloadImages = ({ imageUrls, targetName, Quality }) => {
    const preloadImages = () => {
        imageUrls.forEach((imageUrl) => {
            // console.log(axios.defaults.baseURL + "/" + targetName + "/" + Quality + "/" + imageUrl + (Quality === "HighQuality" ? ".png" : ".jpg"));
            const img = new Image();
            img.src = axios.defaults.baseURL + "/" + targetName + "/" + Quality + "/" + imageUrl + (Quality === "HighQuality" ? ".png" : ".jpg");
        });
    };

    return (
        <Button onClick={preloadImages} className="h-100 w-100">
            Preload
        </Button>
    );
};

export default PreloadImages;