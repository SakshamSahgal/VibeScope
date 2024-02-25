import Cookies from 'js-cookie';
import { Button } from 'react-bootstrap';

function LogoutBtn() {

    const Logout = () => {
        Cookies.remove('token');
        window.location.href = '/';
    }

    return (
            <Button variant="outline-light" onClick={Logout}> Logout </Button>
    )
}

export default LogoutBtn;