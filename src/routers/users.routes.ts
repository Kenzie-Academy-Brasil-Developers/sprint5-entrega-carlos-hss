import * as Express  from "express"

import { userSchema } from "../models"
import { validateData } from "../middlewares"
import {
  userCreateController,
} from "../controllers"

const router = Express.Router()

router.post("", validateData(userSchema), userCreateController)


export default router