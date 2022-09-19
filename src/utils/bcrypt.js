import bcrypt from "bcrypt"

export const encryptPassword = async (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

export const comparePassword = async (password, hash) => {
  return bcrypt.compareSync(password, hash)
}
