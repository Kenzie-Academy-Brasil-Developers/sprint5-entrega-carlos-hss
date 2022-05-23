import AppDataSource from "../data-source"
import { User } from "../entities"

export const readUsersService = async () => {
  const usersRepository = AppDataSource.getRepository(User)

  const users = await usersRepository.find()

  return users
}