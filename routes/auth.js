import express from 'express'

const router = express.Router()

import { requireSignin, isAdmin } from "../middlewares/auth.js"
import {register, secret, login} from "../controllers/auth.js"

router.post("/register", register)
router.post("/login", login)
///testing
router.get('/secret', requireSignin, isAdmin, secret)

export default router