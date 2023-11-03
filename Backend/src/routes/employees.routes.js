import { Router } from "express";
import {getEmployees} from '../controllers/employees.controller.js'

const router = Router();
router.get('/employees',getEmployees);
router.post('/employees',(req,res) => res.send('creando empleados'));
router.put('/employees',(req,res) => res.send('actualizando empleados'));
router.delete('/employees',(req,res) => res.send('eliminando empleados'));

export default router;