import {pool} from '../db.js';

export const Login = async (req,res) => {
    const {email , password} = req.body;
    console.log(req.body);
    const [rows] = await pool.query('SELECT * FROM Usuarios WHERE Email = ? AND Pass = ? ;', [email,password]);
    res.json(rows);
};