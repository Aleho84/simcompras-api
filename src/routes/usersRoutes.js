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
router.post('/login', passport.authenticate('login', { failureRedirect: '/api/users/login' }), login)
router.get('/signin', signinError)
router.post('/signin', passport.authenticate('signin', { failureRedirect: '/api/users/signin' }), signin)
router.get('/logout', logout)
router.get('/currentUser', currentUser)

export default router