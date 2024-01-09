import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        role: 'User', // Set the default value for the role field
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
            username: formData.username,
            password: formData.password,
            role: formData.role,
        };

        try {
            // Send data to the API endpoint
            axios.post("https://localhost:7110/api/user/register", apiData).then((response) => {
                console.log(response.status);
                if (!response.error) {
                    // Registration successful
                    console.log('User registered successfully!');
                    navigate("/userlogin");
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
                <h1 className="mb-5">Register now</h1>
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
                            <label className="form-label" htmlFor="username">Username:</label>
                            

                        </div>
                        <div class="col-md-4">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
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
                        {/* Hidden role field with a default value */}
                        <input type="hidden" name="role" value={formData.role} />

                        <div class="col-md-3 d-grid">
                            <button class="btn btn-outline-info btn-block" type="submit">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        
   );
}

export default Register;