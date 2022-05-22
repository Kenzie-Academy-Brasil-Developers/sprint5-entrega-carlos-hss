import bcrypt from "bcryptjs"

import { CustomError } from "../models"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { UserCreateService } from "../interfaces"

export const userCreateService = async ({
  name,
  email,
  password,
  age,
}: UserCreateService) => {
  const userRepository = AppDataSource.getRepository(User)
  const userAlreadyExists = await userRepository.findOneBy({ email })

  if (userAlreadyExists) {
    throw CustomError("Email already exists")
  }

  const hash = await bcrypt.hash(password, 10)
  const user = new User()

  user.name = name
  user.email = email
  user.age = age
  user.password = hash

  userRepository.create(user)
  await userRepository.save(user)

  const { password: _, ...userWithoutPassword } = user

  return userWithoutPassword
}
