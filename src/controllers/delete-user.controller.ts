import * as Express from "express"

import { deleteUserService } from "../services"

export async function deleteUserController(req: Express.Request, res: Express.Response) {
  const id = req.params.id

  const deletedUser = await deleteUserService(id)

  return res.json({ message: "User deleted", user: deletedUser })
}