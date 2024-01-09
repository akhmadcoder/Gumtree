import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add logic for form submission (e.g., API request, validation)
        console.log('Form submitted with data:', formData);

        // Prepare data for API submission
        const apiData = {
            email: formData.email,
            password: formData.password,
        };

        try {
            // Send data to the API endpoint
            axios.post("https://localhost:7110/api/user/login", apiData).then((response) => {
                console.log(response.status);
                if (!response.error) {
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

                    console.log('token is: '+ saved_token + ' and email is: ' + saved_email)
                    navigate("/");
                    window.location.reload();
                } else {
                    console.log(response.error);
                }

            });

        } catch (error) {
            console.error('An error occurred during registration:', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row p-3 text-center">
                <h1 className="mb-5">User Login</h1>
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
                                required
                                className="form-control"
                            />
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
                                required
                                className="form-control"
                            />
                        </div>
                    </div>
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