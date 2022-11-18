import axios from 'axios'
import userGenerator from '../generators/user.js'
import 'dotenv/config'
import {
    PROTOCOL,
    HOST,
    PORT
} from '../../config/constant.js'

const URL = `${PROTOCOL}://${HOST}:${PORT}`

export const postLogInUser = async () => {
    const urlRequest = `${URL}/api/users/login`
    const body = {
        "email": "admin@admin.com",
        "password": "admin"
    }
    const response = await axios.post(urlRequest, body)
    return response.data
}

export const postSignInUser = async () => {
    const urlRequest = `${URL}/api/users/signin`
    const body = userGenerator()
    const response = await axios.post(urlRequest, body)
    return response.data
}

export const getCurrentUser = async () => {
    const urlRequest = `${URL}/api/users/currentUser`
    const response = await axios.get(urlRequest)
    return response.data
}

export const getLogOutUser = async () => {
    const urlRequest = `${URL}/api/users/logout`
    const response = await axios.get(urlRequest)
    return response.data
}