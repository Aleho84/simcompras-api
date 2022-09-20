import axios from 'axios'
import productGenerator from '../generators/product.js'

export const getProducts = async () => {
    const urlRequest = 'http://localhost:8080/api/products'
    const response = await axios.get(urlRequest)
    return response.data
}

export const postProducts = async () => {
    const urlRequest = 'http://localhost:8080/api/products'
    const body = productGenerator()
    const response = await axios.post(urlRequest, body)
    return response.data
}

export const getProductId = async (idProduct) => {
    const urlRequest = `http://localhost:8080/api/products/${idProduct}/`
    const response = await axios.get(urlRequest)
    return response.data
}

export const putProductId = async (idProduct) => {
    const urlRequest = `http://localhost:8080/api/products/${idProduct}/`
    const body = productGenerator()
    const response = await axios.put(urlRequest, body)
    return response.data
}

export const deleteProductId = async (idProduct) => {
    const urlRequest = `http://localhost:8080/api/products/${idProduct}/`
    const response = await axios.delete(urlRequest)
    return response.data
}