

import DownloadAllButton from "../Components/DownloadAllButton"
import Navbar from "../Components/Navbar";
import SizeBar from "../Components/Size";
import TargetCards from "../Components/TargetCardComponents/TargetCards";


function Home() {

    if(localStorage.getItem("LoggedIn") === null) {
        window.location.href = '/';
    }


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