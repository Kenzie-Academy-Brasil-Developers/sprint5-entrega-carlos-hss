import * as Express from "express"

import { updateUserService } from "../services"

export async function updateUserController(req: Express.Request, res: Express.Response) {
  const id = req.params.id

  const updatedUser = await updateUserService(id, req.body)

  return res.status(200).json({ message: "User updated", user: updatedUser })
}
