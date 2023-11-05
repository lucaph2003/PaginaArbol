import { Router } from "express";
import {deleteOvino,getOvinoByCabania,getOvinoById,getOvinos,getParents,postOvino,putOvino} from '../controllers/ovinos.controller.js'

const router = Router();
router.get('/findOvino/:id',getOvinoById); //pronto
router.get('/getOvino/:id',getOvinoById); //pronto
router.get('/getOvinoByCabania/:id',getOvinoByCabania); //pronto
router.get('/getOvinoById',getOvinoById); //pronto
router.get('/getParents',getParents); //pronto
router.get('/Ovino',getOvinos); //protno
router.post('/Ovino',postOvino); //pronto
router.put('/Ovino',putOvino); //pronto
router.delete('/Ovino/:id',deleteOvino); //pront

export default router;