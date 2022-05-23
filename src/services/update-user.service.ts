import bcrypt from "bcryptjs"

import AppDataSource from "../data-source"
import { User } from "../entities"
import { CustomError } from "../models"

export const updateUserService = async (
  id: string,
  userData: Omit<User, "updatedAt" | "createdAt" | "id">
) => {
  const { age, email, name, password } = userData

  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id })

  if (!user) {
    throw CustomError("User not found")
  }

  if (!!age) user.age = age
  if (!!email) user.email = email
  if (!!name) user.name = name
  if (!!password) user.password = await bcrypt.hash(password, 10)

  const updatedUser = await userRepository.save(user)

  updatedUser.password = ""

  return updatedUser
}