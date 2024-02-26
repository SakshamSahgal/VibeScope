
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

function LogoutBtn() {

    const Logout = async () => {
        try {
            const response = await axios.get("/logout", { withCredentials: true });
            if (response.data.success === false)
                toast.error(`Error logging out : ${response.data.message}`);
            else {
                localStorage.removeItem("LoggedIn");
                window.location.href = '/';
            }
        }
        catch (error) {
            toast.error(`Error logging out : ${error}`);
        }
    }

    return (
        <Button variant="outline-light" onClick={Logout}> Logout </Button>
    )
}

export default LogoutBtn;