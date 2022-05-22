import AppDataSource from "../data-source"
import { User } from "../entities"

export const ReadUsersService=  async () => {
  const usersRepository = AppDataSource.getRepository(User)

  const users = await usersRepository.find()

  return users
}