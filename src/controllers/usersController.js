import logger from '../utils/logger.js'

export const login = (req, res) => {
  res.status(200).json({
    message: 'User successfully logged in',
    id: req.user._id,
    email: req.user.email,
  })
}

export const loginError = (req, res) => {
  res.status(401).json({ message: 'login error' })
}

export const signin = (req, res) => {
  res.status(201).json({
    message: 'Registered user successfully',
    id: req.user._id,
    email: req.user.email,
  })
}

export const signinError = (req, res) => {
  res.status(500).json({ message: 'Signin error' })
}

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      const msg = 'Failed to log out'
      logger.warn(msg)
      return res.status(500).send({ message: msg })
    }
    const msg = `Closed session ${req.user.email}`
    logger.info(msg)
    res.status(200).send({ message: msg })
  })
}

export const currentUser = (req, res) => {
  if (req.user) {
    const { name, lastname, image, email } = req.user
    res.status(200).json({ name, lastname, email, image })
  } else {
    res.status(200).json({ name: 'Anonymous' })
  }
}