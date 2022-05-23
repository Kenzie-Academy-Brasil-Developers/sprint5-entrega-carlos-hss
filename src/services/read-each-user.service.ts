import { User } from "../entities"
import { CustomError } from "../models"
import AppDataSource from "../data-source"

export const readEachUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id })

  if (!user) {
    throw CustomError("User not found")
  }

  return user
}
