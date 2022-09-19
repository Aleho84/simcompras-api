export default isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).json({ message: 'Not authorized' })
}