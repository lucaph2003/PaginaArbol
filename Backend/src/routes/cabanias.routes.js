import { Router } from "express";
import {getCabanias} from '../controllers/cabania.controller.js'

const router = Router();
router.get('/cabanias',getCabanias);

export default router;