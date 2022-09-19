
import logger from "../utils/logger.js"

const messages = []

export default (io) => {    
    io.on('connection', (socket) => {        
        logger.info(`New user connected. Soquet ID: ${socket.id}`)

        socket.on('set-user', (user) => {
            logger.info('Current User Data', user)
        })    

        socket.on('new-message', (message) => {
            logger.info('New Message', message)
            messages.push(message)
            socket.emit('all-messages', messages)
            socket.broadcast.emit('all-messages',messages)
        })
    
        socket.on('disconnect', (user) => {
            logger.info(`User disconnected: ${user}`)
        })    
    })
}