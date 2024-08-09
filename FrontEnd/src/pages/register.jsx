
import React, { useState } from 'react';
import axios from 'axios';
import './RegisterUser.css';

const RegisterUser = () => {
    // Set title of the page
    document.title = "SIGN UP";

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        username: '',
        password: '',
        role: 'admin', // Default role
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('YOUR_API_ENDPOINT', formData);
            console.log('Registration successful:', response.data);
            // Optionally: show a success message or redirect to another page
        } catch (error) {
            console.error('Registration failed:', error);
            // Optionally: handle error state or show an error message
        }
    };

    return (
        <div className="register-page">
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col-md-6 col-lg-5">
                        <div className="text-center mb-3">
                            <h2>Welcome to Our Library!</h2>
                        </div>
                        <div className="card form-container rounded shadow-sm p-3 mb-5"> {/* Increased bottom margin */}
                            <h2 className="text-center mb-3">SIGN UP</h2>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-2">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="form-control"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="form-control"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="email">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="contactNo">Contact No</label>
                                        <input
                                            type="text"
                                            id="contactNo"
                                            name="contactNo"
                                            className="form-control"
                                            value={formData.contactNo}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            className="form-control"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                    </div>
                                </form>
                            </div>
                        <div className="text-center mt-4"> {/* Added top margin */}
                            <p className="text-muted">
                                With a library card, you can borrow books, audiobooks, and ebooks. You can also access a variety of online resources, including research databases and streaming services.
                            </p>
                            <p className="text-muted">
                                Signing up is free and easy! Just fill out the form above to get started.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterUser;
