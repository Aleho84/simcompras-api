/**
 * @swagger
 * components:
 *   schemas:
 * 
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Bombon BON O BON Blanco
 *         description:
 *           type: string
 *           example: Bombon BON O BON Blanco X 1 Unidad
 *         code:
 *           type: string
 *           example: 77961815
 *         thumbnail:
 *           type: string
 *           format: uri
 *           example: https://static.cotodigital3.com.ar/sitios/fotos/full/00118600/00118609.jpg?3.0.137b
 *         price:
 *           type: number
 *           minimum: 0
 *           example: 40.49
 *         stock:
 *           type: integer
 *           minimum: 0
 *           example: 120
 * 
 *     getProduct:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "63249d64db15630bcc5d2067"
 *         name:
 *           type: string
 *           example: Bombon BON O BON Blanco
 *         description:
 *           type: string
 *           example: Bombon BON O BON Blanco X 1 Unidad
 *         code:
 *           type: string
 *           example: 77961815
 *         thumbnail:
 *           type: string
 *           format: uri
 *           example: https://static.cotodigital3.com.ar/sitios/fotos/full/00118600/00118609.jpg?3.0.137b
 *         price:
 *           type: number
 *           minimum: 0
 *           example: 40.49
 *         stock:
 *           type: integer
 *           minimum: 0
 *           example: 120
 *         __v:
 *           type: integer
 *           example: 0
 * 
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Pepe
 *         lastname:
 *           type: string
 *           example: Argento
 *         email:
 *           type: string
 *           example: pepeargento@mail.com
 *         password:
 *           type: string
 *           example: fatiga
 *         image:
 *           type: string
 *           example: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgWSWOqeAoLAfMlbBBg8IN-v2x5IGAfbuSg&usqp=CAU
 * 
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: pepeargento@mail.com
 *         password:
 *           type: string
 *           example: fatiga
 * 
 *     Cart:
 *       type: object
 *       properties:
 *         products:
 *           $ref: '#/components/schemas/GetProduct'
 *         amount:
 *           type: integer
 *           minimum: 1
 *           example: 1
 */