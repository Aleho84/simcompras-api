import axios from 'axios'
import productGenerator from '../generators/product.js'

import 'dotenv/config'
const SERVER_SWAGGER = process.env.SERVER_SWAGGER

export const getProducts = async () => {
    const urlRequest = `${SERVER_SWAGGER}/api/products`
    const response = await axios.get(urlRequest)
    return response.data
}

export const postProducts = async () => {
    const urlRequest = `${SERVER_SWAGGER}/api/products`
    const body = productGenerator()
    const response = await axios.post(urlRequest, body)
    return response.data
}

export const getProductId = async (idProduct) => {
    const urlRequest = `${SERVER_SWAGGER}/api/products/${idProduct}/`
    const response = await axios.get(urlRequest)
    return response.data
}

export const putProductId = async (idProduct) => {
    const urlRequest = `${SERVER_SWAGGER}/api/products/${idProduct}/`
    const body = productGenerator()
    const response = await axios.put(urlRequest, body)
    return response.data
}

export const deleteProductId = async (idProduct) => {
    const urlRequest = `${SERVER_SWAGGER}/api/products/${idProduct}/`
    const response = await axios.delete(urlRequest)
    return response.data
}