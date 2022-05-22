import bcrypt from "bcryptjs"

import { CustomError } from "../models"
import AppDataSource from "../data-source"
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

  if (userAlreadyExists) throw CustomError("Email already exists")

  const hash = await bcrypt.hash(password, 10)

  const user = userRepository.create({
    name,
    email,
    password: hash,
    age,
  })

  await userRepository.save(user)

  user.password = "_"

  return user
}
