import { Router } from "express";
import {deleteOvino,findOvino,getDatosOvino,getOvinoByCabania,getOvinoById,getOvinos,getParents,postOvino,putOvino} from '../controllers/ovinos.controller.js'

const router = Router();
router.delete('/Ovino',deleteOvino);
router.get('/findOvino',findOvino);
router.get('/getOvino',getDatosOvino);
router.get('/getOvinoByCabania',getOvinoByCabania);
router.get('/getOvinoById',getOvinoById);
router.get('/Ovino',getOvinos);
router.get('/getParents',getParents);
router.post('/Ovino',postOvino);
router.put('/Ovino',putOvino);

export default router;