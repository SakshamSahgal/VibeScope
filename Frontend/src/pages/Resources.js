import CustomNavbar from "../Components/Navbar"
import ResourceCard from "../Components/ResourcesConponents/ResourceCard"

function Resources() {

    return (
        <>
            <CustomNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ResourceCard Heading={"Plant.vbs"} APIPath={"/ResourcesEdit/Plant"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ResourceCard Heading={"WindowsDefender.vbs"} APIPath={"/ResourcesEdit/WindowsDefender"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ResourceCard Heading={"WindowsLibraries.vbs"} APIPath={"/ResourcesEdit/WindowsLibraries"} />
                    </div>
                </div>
            </div>
        </>
    );

}

export default Resources;