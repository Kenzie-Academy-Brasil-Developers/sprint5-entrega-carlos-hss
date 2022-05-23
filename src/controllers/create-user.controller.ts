import * as Express from "express"

import { userCreateService } from "../services"

export async function userCreateController(req: Express.Request, res: Express.Response) {
  const newUser = await userCreateService(req.body)

  return res.status(201).json({ message: "User created", user: newUser })
}