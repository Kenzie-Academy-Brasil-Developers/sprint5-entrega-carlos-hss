import AppDataSource from "../data-source"
import { User } from "../entities"
import { CustomError } from "../models"

export const deleteUserService =  async (id: string) => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id })

  if (!user) {
    throw CustomError("User not found")
  }

  await userRepository.delete(user.id)

  return user
}
