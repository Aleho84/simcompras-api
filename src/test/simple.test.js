import { getProducts } from './endpoints/products.js'

getProducts()
    .then(resp => {
        console.log(resp)
    })
