import axios from 'axios'
import config from '../config'

export async function borrowBook(body){
    const response = await axios.post(`${config.url}/borrow/issue/`, body)

    return response.data
}

export async function getBook(body){
    const response = await axios.get(`${config.url}/book/info/${body}`)
    // console.log(response.data);
    return response.data
}


export async function addBook(body){
    const response = await axios.post(`${config.url}/book/add`, body)

    return response.data
}

export async function getAllBooks(){
    const response = await axios.get(`${config.url}/book`)
    // console.log(JSON.stringify(response))
    return response.data
}