import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Cookies from 'js-cookie';


const Login = () => {

    //check if token is present in cookies, if yes then redirect to home page
    if (Cookies.get('token'))
        window.location.href = '/home';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(axios.defaults.baseURL);
    const handleLogin = () => {

        // console.log(`Username: ${username}, Password: ${password}`);
    
        axios.post( '/login', { username: username, password: password }).then((response) => {
            console.log(response.data);
            if (response.data.success == false) {
                alert(response.data.message);
                //remove token from cookies (if any)
                Cookies.remove('token');
            }
            else {
                //set token in cookies using js-cookie
                Cookies.set('token', response.data.token);
                window.location.href = '/home';
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    //handle enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="card col-md-6 col-lg-4 shadow mb-5 rounded">
                <div className="card-header text-center">
                    <h3>Access Credentials</h3>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label"> <FontAwesomeIcon icon={faUser} className="me-2" /> Username </label>
                        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyPress={handleKeyPress} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"> <FontAwesomeIcon icon={faLock} className="me-2" /> Password </label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress} />
                    </div>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary w-100" onClick={handleLogin}> <FontAwesomeIcon icon={faRightToBracket} className='me-2' /> Login </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
