import * as Express from "express"

import { readUsersService } from "../services"

export const readUsersController = async (req: Express.Request, res: Express.Response) => {
  const users = await readUsersService()

  return res.json(users)
}
