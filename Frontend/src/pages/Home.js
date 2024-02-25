

import Cookies from "js-cookie";
import DownloadAllButton from "../Components/DownloadAllButton"
import Navbar from "../Components/Navbar";
import SizeBar from "../Components/Size";
import TargetCards from "../Components/TargetCardComponents/TargetCards";
import { AxiosGET } from "../Scripts/AxiosRequest";

function Home() {

    AxiosGET('/validateToken',{},Cookies.get('token'))

    return (
        <>
            <Navbar />
            <div className="container my-3">
                <div className="row my-3 px-3">
                    <div className="col">
                        <DownloadAllButton />
                    </div>
                </div>
                <div className="row">
                    <SizeBar />
                </div>
                    <TargetCards />
            </div>
        </>
    )
}

export default Home;