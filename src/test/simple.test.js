import { postProducts } from './endpoints/products.js'

postProducts()
    .then(resp => {
        console.log(resp)
    })
