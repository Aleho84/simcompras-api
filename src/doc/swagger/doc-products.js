/**
 * @swagger
 * paths:
 *   /api/products/:
 *     get:
 *       summary: Products.
 *       description: Get information on all products.
 *       operationId: "getProducts"
 *       tags:
 *         - Products
 *       produces:
 *         - application/json
 *       parameters: []
 *       responses:
 *         "200":
 *           description: OK. Get products sucessfuly.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/products/{id}:
 *     get:
 *       summary: Get product.
 *       description: Get a product info by id.
 *       operationId: "getProductById"
 *       tags:
 *         - Products
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID product
 *           schema:
 *             type: string
 *             example: 63239e51e588d4bc805f4c5a
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: OK. Get product sucessfuly.
 *         "404":
 *           description: Not Found. Product not found.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths: 
 *   /api/products/:
 *     post:
 *       summary: Add product.
 *       description: Create a new product.
 *       operationId: "postProduct"
 *       tags:
 *         - Products
 *       parameters: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
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
 *   /api/products/{id}:
 *     put:
 *       summary: Update product.
 *       description: Modify a product.
 *       operationId: "putProduct"
 *       tags:
 *         - Products
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID product
 *           schema:
 *             type: string 
 *             example: 63239e51e588d4bc805f4c5a
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: OK. Update product sucessfuly.
 *         "404":
 *           description: Not Found. Product not found.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/products/{id}:
 *     delete:
 *       summary: Delete product.
 *       description: Devuelve un JSON con la informacion del producto eliminado.
 *       operationId: "deleteProduct"
 *       tags:
 *         - Products
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: El ID del producto
 *           schema:
 *             type: string 
 *             example: 63239e51e588d4bc805f4c5a
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: OK. Delete product sucessfuly.
 *         "404":
 *           description: Not Found. Product not found.
 *         "500":
 *           description: Internal Server Error.
 */