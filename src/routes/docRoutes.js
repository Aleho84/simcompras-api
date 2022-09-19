import express from 'express'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import packageJson from '../../package.json' assert {type: "json"}
import { fileURLToPath } from 'url'
import path from 'path'
import 'dotenv/config'

const swaggerApp = express()
const SERVER_SWAGGER = process.env.SERVER_SWAGGER

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Swagger 
const swaggerOptions = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: packageJson.name.toUpperCase(),
            version: packageJson.version,
            description: `DOCUMENTACION - ${packageJson.description}`,
            contact: {
                name: packageJson.author.name,
                email: packageJson.author.email,
                url: packageJson.author.url
            }
        },
        servers: [{ url: SERVER_SWAGGER }]
    },
    apis: [
        path.join(__dirname, '../doc/swagger/swagger-tags.js'),
        path.join(__dirname, '../doc/swagger/swagger-models.js'),
        path.join(__dirname, '../doc/swagger/doc-carts.js'),
        path.join(__dirname, '../doc/swagger/doc-products.js'),
        path.join(__dirname, '../doc/swagger/doc-users.js')
    ]
}

const swaggerUIOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "simcompras-api",
    customfavIcon: "/ico/favicon.ico"
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
swaggerApp.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs, swaggerUIOptions))

export default swaggerApp