import * as Express  from "express"

import { userSchema } from "../models"
import { validateData } from "../middlewares"
import {
  readUsersController,
  userCreateController,
} from "../controllers"

const router = Express.Router()

router.post("", validateData(userSchema), userCreateController)
router.get("", readUsersController);


export default router
