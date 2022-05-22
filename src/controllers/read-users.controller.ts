import { Request, Response } from "express"
import { ReadUsersService } from "../services"

export const readUsersController = async (req: Request, res: Response) => {
  const users = await ReadUsersService()

  return res.json(users)
}
