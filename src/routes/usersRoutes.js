import { Router } from 'express'
import passport from 'passport'
const router = Router()

import {
    login,
    loginError,
    signin,
    signinError,
    logout,
    currentUser
} from '../controllers/usersController.js'


router.get('/login', loginError)
router.get('/signin', signinError)
router.get('/logout', logout)
router.post('/login', passport.authenticate('login', { failureRedirect: '/api/users/login' }), login)
router.post('/signin', passport.authenticate('signin', { failureRedirect: '/api/users/signin' }), signin)
router.get('/currentUser', currentUser)

export default router