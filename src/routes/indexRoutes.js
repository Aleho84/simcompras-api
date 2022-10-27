import { Router } from 'express'
import passport from 'passport'

const indexRouter = Router()

import {
    getIndexPage,
    getLoginPage,
    getSigninPage,
    getLoginFail,
    getSigninFail,
    getLogout
} from '../controllers/indexController.js'

indexRouter.get('/', getIndexPage)
indexRouter.get('/login', getLoginPage)
indexRouter.get('/signin', getSigninPage)
indexRouter.get('/loginfail', getLoginFail)
indexRouter.get('/signinfail', getSigninFail)
indexRouter.get('/logout', getLogout)

indexRouter.post('/loginreq', passport.authenticate('login', { failureRedirect: '/loginfail' }), getIndexPage)
indexRouter.post('/signinreq', passport.authenticate('signin', { failureRedirect: '/signinfail' }), getIndexPage)

export default indexRouter