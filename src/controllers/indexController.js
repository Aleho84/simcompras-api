import packageJson from '../../package.json' assert {type: "json"}
import logger from '../utils/logger.js'

export const getIndexPage = (req, res) => {
  res.render('index', { title: packageJson.name.toUpperCase(), user: readUser(req) })
}

export const getLoginPage = (req, res) => {
  res.render('login', { user: readUser(req) })
}

export const getSigninPage = (req, res) => {
  res.render('signin', { user: readUser(req) })
}

export const getLoginFail = (req, res) => {
  res.render('loginfail', { user: readUser(req) })
}

export const getSigninFail = (req, res) => {
  res.render('signinfail', { user: readUser(req) })
}

export const getLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      const msg = 'Failed to log out'
      logger.warn(msg)
    } else if (req.user.email) {
      const msg = `Closed session ${req.user.email}`
      logger.info(msg)
    }
  })

  res.redirect('/')
}

const readUser = function (req) {
  if (req.user) {
    return { name: req.user.name, image: req.user.image }
  } else {
    return { name: 'Anonymous', image: 'https://www.shareicon.net/data/128x128/2016/02/19/721756_people_512x512.png' }
  }
}