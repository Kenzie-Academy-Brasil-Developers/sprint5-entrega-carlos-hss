import * as Express from "express"

import { readEachUserService } from "../services"

export const readEachUserController = async (req: Express.Request, res: Express.Response) => {
  const id = req.params.id

  const user = await readEachUserService(id)

  return res.json(user)
}