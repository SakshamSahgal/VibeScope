import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';


function Login() {

    if (localStorage.getItem("LoggedIn")) {
        window.location.href = '/home';
    }

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Username:', Username);
        console.log('Password:', Password);
        try {
            const response = await axios.post('/login', { Username, Password }, { withCredentials: true });
            console.log(response.data);
            if (response.data.success) {
                toast.success('Login Successful');
                localStorage.setItem("LoggedIn", true);
                window.location.href = '/home';
            }
            else {
                toast.error('Login Failed');
            }
        }
        catch (error) {
            console.error('Error:', error);
            toast.error(`Error: ${error.message}`);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '400px' }}>
                <Card.Body>
                    <h2 className="text-center">Credentials</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername" className="mb-3">
                            <Form.Label><FontAwesomeIcon icon={faUser} /> Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                value={Username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label><FontAwesomeIcon icon={faLock} /> Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='w-100'>  Submit </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
