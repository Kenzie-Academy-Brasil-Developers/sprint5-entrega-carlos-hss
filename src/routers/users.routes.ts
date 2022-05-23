import * as Express  from "express"

import { userSchema, userUpdateSchema } from "../models"
import { validateData } from "../middlewares"
import {
  readUsersController,
  readEachUserController,
  updateUserController,
  userCreateController,
  deleteUserController,
} from "../controllers"

const router = Express.Router()

router.post("", validateData(userSchema), userCreateController)
router.get("", readUsersController)
router.get("/:id", readEachUserController)
router.patch("/:id", validateData(userUpdateSchema), updateUserController)
router.delete("/:id", deleteUserController)


export default router
