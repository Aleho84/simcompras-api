/**
 * @swagger
 * paths:
 *   /api/carts/:
 *     get:
 *       summary: Get carts.
 *       description: Get information of all carts.
 *       operationId: "getCarts"
 *       tags:
 *         - Carts
 *       produces:
 *         - application/json
 *       parameters: []
 *       responses:
 *         "200":
 *           description: OK. Get carts sucessfuly.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/carts/{id}:
 *     get:
 *       summary: Get cart.
 *       description: Get cart info by id.
 *       operationId: "getCartById"
 *       tags:
 *         - Carts
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID cart
 *           schema:
 *             type: string
 *             example: 63239e51e588d4bc805f4c5a
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: OK. Get cart sucessfuly.
 *         "404":
 *           description: Not Found. Cart not found.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/carts/:
 *     post:
 *       summary: Add cart.
 *       description: Create a new cart.
 *       operationId: "postCart"
 *       tags:
 *         - Carts
 *       parameters: []
 *       requestBody:
 *         required: false
 *       produces:
 *         - application/json
 *       responses:
 *         "201":
 *           description: Created. Add new cart sucessfuly.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths: 
 *   /api/carts/{id}/products:
 *     post:
 *       summary: Add product.
 *       description: Add products to a cart.
 *       operationId: "postCartProduct"
 *       tags:
 *         - Carts
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID cart
 *           schema:
 *             type: string
 *             example: 63239e51e588d4bc805f4c5a
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/getProduct'
 *       produces:
 *         - application/json
 *       responses:
 *         "201":
 *           description: Created. Add new product sucessfuly.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths: 
 *   /api/carts/{id}/products:
 *     get:
 *       summary: Get products.
 *       description: Get products from cart.
 *       operationId: "getCartProduct"
 *       tags:
 *         - Carts
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID cart
 *           schema:
 *             type: string
 *             example: 63239e51e588d4bc805f4c5a
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: Get products from cart sucessfuly.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths: 
 *   /api/carts/{id}/products/{productId}:
 *     delete:
 *       summary: Delete product.
 *       description: Delete product from cart.
 *       operationId: "deleteCartProduct"
 *       tags:
 *         - Carts
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID cart
 *           schema:
 *             type: string
 *             example: 63239e51e588d4bc805f4c5a
 *         - name: productId
 *           in: path
 *           required: true
 *           description: ID product
 *           schema:
 *             type: string
 *             example: 63249d64db15630bcc5d2067
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: Delete products from cart sucessfuly.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths: 
 *   /api/carts/{id}:
 *     delete:
 *       summary: Delete cart.
 *       description: Delete cart.
 *       operationId: "deleteCart"
 *       tags:
 *         - Carts
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID cart
 *           schema:
 *             type: string
 *             example: 63239e51e588d4bc805f4c5a
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: Delete cart sucessfuly.
 *         "500":
 *           description: Internal Server Error.
 */