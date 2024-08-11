import axios from 'axios'
import config from '../config'



export async function signup(firstName, lastName, email,
     password, passwordConfirm, phone){

    //body parameters
    const body = {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        phone,
    }

    //make API call
    const response = await axios.post(`${config.url}/user/signup`, body)

    //read JSON data (response)
    return response.data
}


export async function signin(email, password){
    //body parameters
    const body = {
        email,
        password,
    }

    //make API call
    const response = await axios.post(`${config.url}/user/signin`, body)

    //read JSON data (response)
    return response.data
}