import express from 'express'

import formidable from 'express-formidable'

const router = express.Router()

import { requireSignin, isAdmin } from "../middlewares/auth.js"

import { create , list} from '../controllers/product.js'

router.post('/product', requireSignin, isAdmin, formidable(), create)
router.get('products', list)


export default router