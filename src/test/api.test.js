import chai from 'chai'
const assert = chai.assert
const expect = chai.expect
const should = chai.should

import { postLogInUser, postSignInUser, getCurrentUser } from './endpoints/users.js'
import { getProducts, postProducts, getProductId, putProductId, deleteProductId } from './endpoints/products.js'


describe('Test simcompras-api', () => {

    describe('Users test:', () => {

        describe('postLogInUser:', () => {
            it('type:', async () => {
                const test = await postLogInUser()
                assert.typeOf(test, 'object')
            })
            it('keys:', async () => {
                const test = await postLogInUser()
                assert.hasAllKeys(test, ['message', 'id', 'email'])
            })
        })

        describe('postSignInUser:', () => {
            it('type:', async () => {
                const test = await postSignInUser()
                assert.typeOf(test, 'object')
            })
            it('keys:', async () => {
                const test = await postSignInUser()
                assert.hasAllKeys(test, ['message', 'id', 'email'])
            })
        })

        describe('getCurrentUser:', () => {
            it('type:', async () => {
                const test = await getCurrentUser()
                assert.typeOf(test, 'object')
            })
            it('keys:', async () => {
                const test = await getCurrentUser()
                assert.hasAllKeys(test, ['name'])
            })
        })
    })

    // *** Ver el tema de session para poder usar chai o implementar JWT ***

    // describe('Products test:', () => {

    //     let idProduct1 = ''
    //     let idProduct2 = ''

    //     describe('getProducts:', () => {
    //         it('type:', async () => {
    //             const test = await getProducts()
    //             assert.typeOf(test, 'array')
    //         })
    //         it('keys:', async () => {
    //             const test = await postProducts()
    //             idProduct2 = test.product._id
    //             assert.hasAllKeys(test, ['message', 'product'])
    //         })
    //     })

    //     describe('postProducts:', () => {
    //         it('type:', async () => {
    //             const test = await postProducts()
    //             idProduct1 = test.product._id
    //             assert.typeOf(test, 'object')
    //         })
    //         it('keys:', async () => {
    //             const test = await postProducts()
    //             idProduct2 = test.product._id
    //             assert.hasAllKeys(test, ['message', 'product'])
    //         })
    //     })

    //     describe('getProductId:', () => {
    //         it('type:', async () => {
    //             const test = await getProductId(idProduct1)
    //             assert.typeOf(test, 'object')
    //         })
    //         it('keys:', async () => {
    //             const test = await getProductId(idProduct2)
    //             assert.hasAllKeys(test, ['_id', 'name', 'description', 'code', 'thumbnail', 'price', 'stock', '__v'])
    //         })
    //     })

    //     describe('putProductId:', () => {
    //         it('type:', async () => {
    //             const test = await putProductId(idProduct1)
    //             assert.typeOf(test, 'object')
    //         })
    //         it('keys:', async () => {
    //             const test = await putProductId(idProduct2)
    //             assert.hasAllKeys(test, ['message', 'product'])
    //         })
    //     })

    //     describe('deleteProductId:', () => {
    //         it('type:', async () => {
    //             const test = await deleteProductId(idProduct1)
    //             assert.typeOf(test, 'object')
    //         })
    //         it('keys:', async () => {
    //             const test = await deleteProductId(idProduct2)
    //             assert.hasAllKeys(test, ['message', 'product'])
    //         })
    //     })

    //     describe('getProducts:', () => {
    //         it('type:', async () => {
    //             const test = await getProducts()
    //             assert.typeOf(test, 'array')
    //         })
    //         it('keys:', async () => {
    //             const test = await getProducts()
    //             assert.hasAllKeys(test[0], ['_id', 'name', 'description', 'code', 'thumbnail', 'price', 'stock', '__v'])
    //         })
    //     })
    // })
})