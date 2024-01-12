import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        backend: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear previous error when user types
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add logic for form submission (e.g., API request, validation)
        console.log('Form submitted with data:', formData);

        // Basic front-end validation
        if (!formData.email || !formData.password) {
            setErrors({
                email: !formData.email ? 'Email is required' : '',
                password: !formData.password ? 'Password is required' : '',
                backend: '',
            });
            return;
        }

        // Prepare data for API submission
        const apiData = {
            email: formData.email,
            password: formData.password,
        };

        try {

            axios.post('https://localhost:7110/api/user/login', apiData)
                .then((response) => {

                    // Registration successful
                    console.log('User logged in successfully!');
                    const access = response.data.token;
                    const email = response.data.email;
                    const username = response.data.username;

                    localStorage.setItem("accessToken", access);
                    localStorage.setItem("accessEmail", email);
                    localStorage.setItem("accessUsername", username);

                    const saved_token = localStorage.getItem('accessToken');
                    const saved_email = localStorage.getItem('accessEmail');

                    console.log('token is: ' + saved_token + ' and email is: ' + saved_email)
                    navigate("/");
                    window.location.reload();

                })
                .catch(error => {
                    console.log('Login or password not correct');
                    setErrors({ ...errors, backend: 'Login or password not correct' });
                });

        } catch (e) {
            console.log('Login failed');
            setErrors({ ...errors, backend: 'Login failed' });
        }

    };

    return (
        <div className="container-fluid">
            <div className="row p-3 text-center">
                <h1 className="mb-5">User Login</h1>
                <div id="login_alerts"></div>
                <form onSubmit={handleFormSubmit}>
                    <div class="row justify-content-center p-3">
                        <div class="col-md-1">
                            <label className="form-label" htmlFor="email">Email:</label>
                        </div>
                        <div class="col-md-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                            <div style={{ color: 'red' }}>{errors.email}</div>
                        </div>
                    </div>

                    <div class="row justify-content-center p-3">
                        <div class="col-md-1">
                            <label className="form-label" htmlFor="password">Password:</label>

                        </div>
                        <div class="col-md-4">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                            <div style={{ color: 'red' }}>{errors.password}</div>
                        </div>
                    </div>

                    <div style={{ color: 'red' }}>{errors.backend}</div>

                    <div class="row justify-content-center p-3">
                        
                        <div class="col-md-3 d-grid">
                            <button class="btn btn-outline-info btn-block" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;