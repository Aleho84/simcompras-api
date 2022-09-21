import axios from 'axios'
import productGenerator from '../generators/product.js'
import 'dotenv/config'
import {
    PROTOCOL,
    HOST,
    PORT
} from '../../config/constant.js'

const URL = `${PROTOCOL}://${HOST}:${PORT}`

export const getProducts = async () => {    
    const urlRequest = `${URL}/api/products`
    const response = await axios.get(urlRequest)
    return response.data
}

export const postProducts = async () => {
    const urlRequest = `${URL}/api/products`
    const body = productGenerator()
    const response = await axios.post(urlRequest, body)
    return response.data
}

export const getProductId = async (idProduct) => {
    const urlRequest = `${URL}/api/products/${idProduct}/`
    const response = await axios.get(urlRequest)
    return response.data
}

export const putProductId = async (idProduct) => {
    const urlRequest = `${URL}/api/products/${idProduct}/`
    const body = productGenerator()
    const response = await axios.put(urlRequest, body)
    return response.data
}

export const deleteProductId = async (idProduct) => {
    const urlRequest = `${URL}/api/products/${idProduct}/`
    const response = await axios.delete(urlRequest)
    return response.data
}