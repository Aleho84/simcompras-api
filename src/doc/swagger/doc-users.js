/**
 * @swagger
 * paths:
 *   /api/users/login/:
 *     post:
 *       summary: User login.
 *       description: Authentication for an user.
 *       operationId: "login"
 *       tags:
 *         - Users
 *       parameters: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: OK. Login successfully.
 *         "401":
 *           description: Unauthorized. login faild.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/users/signin/:
 *     post:
 *       summary: User signin.
 *       description: Registry for an new user.
 *       operationId: "signin"
 *       tags:
 *         - Users
 *       parameters: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       produces:
 *         - application/json
 *       responses:
 *         "201":
 *           description: Created. Registry for an new user successfully.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/users/logout/:
 *     get:
 *       summary: Logout user.
 *       description: Logout current user.
 *       operationId: "logout"
 *       tags:
 *         - Users
 *       produces:
 *         - application/json
 *       parameters: []
 *       responses:
 *         "200":
 *           description: OK. Current user successfully loged out.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/users/currentUser/:
 *     get:
 *       summary: Current user info.
 *       description: Show current user info.
 *       operationId: "currentUser"
 *       tags:
 *         - Users
 *       produces:
 *         - application/json
 *       parameters: []
 *       responses:
 *         "200":
 *           description: OK. Current user information obtained.
 *         "500":
 *           description: Internal Server Error.
 */