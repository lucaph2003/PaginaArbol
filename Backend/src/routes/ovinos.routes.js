import { Router } from "express";
import {deleteOvino,findOvino,getOvinoByCabania,getOvinoById,getOvinos,getParents,postOvino,putOvino} from '../controllers/ovinos.controller.js'

const router = Router();
router.get('/findOvino',findOvino); //pronto
router.get('/getOvino',getOvinoById); //pronto
router.get('/getOvinoByCabania',getOvinoByCabania); //pronto
router.get('/getOvinoById',getOvinoById); //pronto
router.get('/getParents',getParents); //pronto
router.get('/Ovino',getOvinos); //protno
router.post('/Ovino',postOvino); //pronto
router.put('/Ovino',putOvino); //pronto
router.delete('/Ovino',deleteOvino); //pront

export default router;