import logger from '../utils/logger.js'

export const login = (req, res) => {
  try {
    res.status(200).json({
      message: `User ${req.user.email} successfully logged in`,
      id: req.user._id,
      email: req.user.email,
    })
  } catch (err) {
    logger.error(err)
    res.status(500).json({ message: err.message, line: err.line })
  }
}

export const loginError = (req, res) => {
  try {
    res.status(401).json({ message: `login error` })
  } catch (err) {
    logger.error(err)
    res.status(500).json({ message: err.message, line: err.line })
  }
}

export const signin = (req, res) => {
  try {
    res.status(201).json({
      message: 'Registered user successfully',
      id: req.user._id,
      email: req.user.email,
    })
  } catch (err) {
    logger.error(err)
    res.status(500).json({ message: err.message, line: err.line })
  }

}

export const signinError = (req, res) => {
  try {
    res.status(500).json({ message: 'Signin error' })
  } catch (err) {
    logger.error(err)
    res.status(500).json({ message: err.message, line: err.line })
  }
}

export const logout = (req, res) => {
  try {
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
  } catch (err) {
    logger.error(err)
    res.status(500).json({ message: err.message, line: err.line })
  }
}

export const currentUser = (req, res) => {
  try {
    if (req.user) {
      const { name, lastname, image, email } = req.user
      res.status(200).json({ name, lastname, email, image })
    } else {
      res.status(200).json({ name: 'Anonymous' })
    }
  } catch (err) {
    logger.error(err)
    res.status(500).json({ message: err.message, line: err.line })
  }
}