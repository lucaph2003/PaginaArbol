import { Router } from "express";
import {pool} from '../db.js';

const router = Router();
router.get('/ping',async (req,res) => {
    const [result] = await pool.query('select * from prueba;');
    res.json(result);
});
router.get('/',(req,res) => res.send('Inicio'));

export default router;