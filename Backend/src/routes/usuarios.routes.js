import { Router } from "express";
import {Login} from '../controllers/usuarios.controller.js'

const router = Router();
router.post('/login',Login);

export default router;