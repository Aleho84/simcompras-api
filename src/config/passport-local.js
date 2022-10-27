import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { usersDao } from '../daos/index.js'
import { encryptPassword, comparePassword } from '../utils/bcrypt.js'
import logger from '../utils/logger.js'

passport.use('signin', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    async (req, email, password, done) => {
        const user = await usersDao.findByEmail(email)
        if (user) {
            const msg = `Signin fail, ${email} already exists`
            logger.warn(msg)
            return done(null, false, { message: msg })
        }
        req.body.password = await encryptPassword(password)
        const nuevoUsuario = await usersDao.create(req.body)
        const msg = `User ${email} signin susscefuly`
        logger.info(msg)
        return done(null, nuevoUsuario)
    }
))

passport.use('login', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    async (req, email, password, done) => {
        const user = await usersDao.findByEmail(email)
        if (!user) {
            const msg = `Login fail, user ${email} don't exist`
            logger.warn(msg)
            return done(null, false, { message: msg })
        }
        const isTruePassword = await comparePassword(password, user.password)
        if (!isTruePassword) {
            const msg = `Login fail, wrong password for user ${email}`
            logger.warn(msg)
            return done(null, false, { message: msg })
        }
        const msg = `User ${email} login susscefuly`
        logger.info(msg)
        return done(null, user)
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await usersDao.get(id)
    done(null, user)
})