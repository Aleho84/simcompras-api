import { Router } from 'express'
import passport from 'passport'

const userRouter = Router()

import {
    login,
    loginError,
    signin,
    signinError,
    logout,
    currentUser
} from '../controllers/usersController.js'


userRouter.get('/login', loginError)
userRouter.get('/signin', signinError)
userRouter.get('/logout', logout)
userRouter.post('/login', passport.authenticate('login', { failureRedirect: '/api/users/login' }), login)
userRouter.post('/signin', passport.authenticate('signin', { failureRedirect: '/api/users/signin' }), signin)
userRouter.get('/currentUser', currentUser)

export default userRouter