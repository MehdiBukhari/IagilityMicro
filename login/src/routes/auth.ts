import { Router } from 'express';
const router = Router();

import { TokenValidation } from '../libs/verifyToken'

import {signup,signin,profile} from '../controllers/auth.controller'

router.post('/signup',signup);
router.post('/signin',signin);

router.get('/profile',TokenValidation,profile);

export default router;