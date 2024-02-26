
import { Button } from 'react-bootstrap';

function LogoutBtn() {

    const Logout = () => {
        window.location.href = '/';
    }

    return (
        <Button variant="outline-light" onClick={Logout}> Logout </Button>
    )
}

export default LogoutBtn;