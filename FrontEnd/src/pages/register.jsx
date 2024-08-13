
import React, { useState } from 'react';
import './RegisterUser.css';
import { signup } from '../service/userService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
    // Set title of the page
    document.title = "SIGN UP";

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {//firstName, lastName, email, password, passwordConfirm, phone

                // client side validations
            if(formData.firstName.length === 0){

            }
            else if(formData.lastName.length === 0){

            }
            else if(formData.email.length === 0){
                toast.warning('Enter Email')
            }else if(formData.password.length === 0){
                toast.password('Enter Password')
            }else if(formData.confirmPassword.length === 0){
                toast.warn('Please enter confirm passoword')
            }else if(formData.password !== formData.confirmPassword){
                toast.warning('Password does not match')
            }else{
                // get user details from email and password
                const result = await signup(formData)
        
                // sample response
                // {
                //     "firstName": "string",
                //     "lastName": "string",
                //     "email": "string",
                //     "password": "string",
                //     "passwordConfirm": "string"
                //   }
        
                console.log(JSON.stringify(result))
        
                if(result['status'] === 'success'){
        
                    toast.success('please login first')
                    // navigate to login
                    navigate('/login')
        
                }else {

                    toast.error('could not sign you up, please try again')
                    navigate('/signup')
                }
                    console.log('Registration successful:', result.data);
                    // Optionally: show a success message or redirect to another page
            }
                
        }catch (error) {
                console.error('Registration failed:', error);
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
                                            type="text"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
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
                                    <div className="mb-2">
                                        <label htmlFor="confirmPassword">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
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
