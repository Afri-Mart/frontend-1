import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as yup from 'yup';
import axios from 'axios'

const credentials = {
    username: '',
    password: '',
}

const initialErrors = {
    username: '',
    password: '',
}

function Login (props) {

    const [ login, setLogin ] = useState(credentials);
    const [ errorMessage, setErrorMessage ] = useState(initialErrors);
    // const { push } = useHistory();


    const handleChange = (e) => {
        console.log(e)
    }


    const handleSubmit = e => {
        e.preventDefault();
        axios.post(``, login)
            .then((res) => {
                // localStorage.setItem("token", res.data.token);
                // localStorage.setItem("username", res.data.username);
                // push("/plants");
            })
            .catch((err) => console.log(err));
    }

    return(
        <div>
            <center>
            <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="errors">
                    </div>
                    <label> Username: 
                    <input 
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        onChange={handleChange} 
                    />
                    </label>
                    
                    <label className="login-input"> Password:
                        <input
                            type="password" 
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange} 
                        />
                    </label>
                    <button className="btn">Login</button>
                    <p>Don't have an account? <Link className="link" to="/create">Create new account</Link></p>
                </form>
                </center>
        </div>
    )

}

export default Login