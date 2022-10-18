
import logger from "../utils/logger.js"

const messages = []

export default (io) => {    
    io.on('connection', (socket) => {        
        logger.info(`[WEBSOCKET]: New user connected. Soquet ID: ${socket.id}`)

        socket.on('set-user', (user) => {
            logger.info('[WEBSOCKET]: Current User Data', user)
        })    

        socket.on('new-message', (message) => {
            logger.info('[WEBSOCKET]: New Message', message)
            messages.push(message)
            socket.emit('all-messages', messages)
            socket.broadcast.emit('all-messages',messages)
        })
    
        socket.on('disconnect', (user) => {
            logger.info(`[WEBSOCKET]: User disconnected: ${user}`)
        })    
    })
}