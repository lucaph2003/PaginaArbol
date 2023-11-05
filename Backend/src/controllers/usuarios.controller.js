import {pool} from '../db.js';

export const Login = async (req,res) => {
    const {email , password} = req.body;
    try{
        const [rows] = await pool.query('SELECT * FROM Usuarios WHERE Email = ? AND Pass = ? ;', [email,password]);
        
        if (rows.length <= 0) {
            return res.status(404).json({ message: "No existe el Administrador" });
        }
      
        res.json(rows);
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal"
        }) 
    }
};