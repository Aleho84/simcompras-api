import axios from 'axios'
import userGenerator from '../generators/user.js'

import 'dotenv/config'
const SERVER_SWAGGER = process.env.SERVER_SWAGGER

export const postLogInUser = async () => {
    const urlRequest = `${SERVER_SWAGGER}/api/users/login`
    const body = {
        "email": "pepeargento@mail.com",
        "password": "fatiga"
    }
    const response = await axios.post(urlRequest, body)
    return response.data
}

export const postSignInUser = async () => {
    const urlRequest = `${SERVER_SWAGGER}/api/users/signin`
    const body = userGenerator()
    const response = await axios.post(urlRequest, body)
    return response.data
}

export const getCurrentUser = async () => {
    const urlRequest = `${SERVER_SWAGGER}/api/users/currentUser`
    const response = await axios.get(urlRequest)
    return response.data
}

export const getLogOutUser = async () => {
    const urlRequest = `${SERVER_SWAGGER}/api/users/logout`
    const response = await axios.get(urlRequest)
    return response.data
}