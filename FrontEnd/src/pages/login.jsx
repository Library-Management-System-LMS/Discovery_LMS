import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './LoginUser.css'; // Ensure this matches the correct path to your CSS file
import { signin } from "../service/userService";
import { toast } from 'react-toastify'
import { loginAction } from '../features/userSlice'

function LoginUser() {
    // to set title of the page
    document.title = "LOG IN";

    // create state members
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // get the navigate object
    const navigate = useNavigate()

    // use dispatch to update global state
    const dispatch = useDispatch()

  const onLogin = async (e) => {
    e.preventDefault()

    console.log('Email:', email, 'Password:', password);

    // client side validations
    if(email.length === 0){
      toast.warning('Enter Email')
    }else if(password.length === 0){
      toast.password('Enter Password')
    }else{
      // get user details from email and password
      const result = await signin(email, password)

      // sample response
      // {
      //   "id": 5,
      //   "firstName": "raj",
      //   "lastName": "saytode",
      //   "email": "raj@gmail.com",
      //   "role": "ROLE_USER",
      //   "status": "success"
      // }

      console.log(JSON.stringify(result))

      if(result['status'] === 'success'){

          const id = result['id']
          const username = result['firstName']
          const email = result['email']
          const role = result['role']

          localStorage.setItem('userId', id)
          localStorage.setItem('email', email)
          localStorage.setItem('role', role)
          localStorage.setItem('username', username)

        // set the login status to true
          dispatch(loginAction())
          
        // show message
        toast.success('You have logged in successfully!')

        // navigate to home
        navigate('/home')

      }else if (result['status'] === 'failure'){
        toast.error('invalid email or password')
        navigate('login')
      }
    }

  }

  // const onLogin = async () => {
    
  //     try {
  //       const result = await signin(email, password)
  //         if (result['status'] === 'success') {

  //         // sample response
  //         // {
  //         //   "id": 5,
  //         //   "firstName": "raj",
  //         //   "lastName": "saytode",
  //         //   "email": "raj@gmail.com",
  //         //   "role": "ROLE_USER",
  //         //   "status": "success"
  //         // }

  //           console.log(JSON.stringify(result))

  //           const id = result['id']
  //           const email = result['email']
  //           const role = result['role']

  //           localStorage.setItem('userId', id)
  //           localStorage.setItem('email', email)
  //           localStorage.setItem('role', role)

  //           // set the login status to true
  //           dispatch(loginAction())

  //           // toast.success('welcome to the application')
  //           navigate('/home')
  //         } else {
  //           toast.error('invalid email or password')
  //         }
  //     }catch(error){
  //       toast.error('an error occured')
  //       console.error(error)
  //     }
    
  // }  

  // const onLogin = async (e) => {
  //   e.preventDefault()
  //   // client side validation
  //   if (email.length === 0) {
  //     // toast.warning('enter email')
  //   } else if (password.length === 0) {
  //     // toast.warning('enter password')
  //   } else {
  //     const result = await signin(email, password)
  //     // if (result['status'] === 'success') {
  //       // read the token
  //       // const token = result['data']['token']
  //       // const name = result['data']['name']
  //       const id = result['id']

  //       // set the data in session storage
  //       // sessionStorage.token = token
  //       // sessionStorage.name = name

  //       // sessionStorage['token'] = token
  //       // sessionStorage['name'] = name

  //       // sessionStorage.setItem('token', token)
  //       localStorage.setItem('id', id)

  //       // set the login status to true
  //       dispatch(loginAction())

  //       toast.success('welcome to the application')
  //       // navigate('/home')
  //       navigate('/home')
  //     // } else {
  //       // toast.error('invalid email or password')
  //     // }
  //   }
  // }

  return (
    <div className="container-fluid d-flex flex-column h-100 login-page">
      <main className="d-flex justify-content-center align-items-center flex-grow-1">
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 card p-4">
          <h1 className="text-center mb-4">Login</h1>
          <form onSubmit={onLogin}>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <Link to="#" className="forgot-password-link">Forgot Password?</Link>
            <p className="text-center mt-4">Don't have an account? <Link to="/register">Register Here</Link></p>
          </form>
        </div>
      </main>
      <footer className="footer">
        <div className="container text-center">
          <span className="text-muted"></span>
        </div>
      </footer>
    </div>
  )
}



export default LoginUser;