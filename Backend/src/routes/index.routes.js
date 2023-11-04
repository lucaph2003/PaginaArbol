import { Router } from "express";

const router = Router();
router.get('/',(req,res) => res.send('Inicio'));

export default router;