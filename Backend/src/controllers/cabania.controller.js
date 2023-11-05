import {pool} from '../db.js';

export const getCabanias = async (req,res) => {
    try{
        const [result] = await pool.query('SELECT * FROM Cabanias;');

        if (result.length <= 0) {
            return res.status(404).json({ message: "No se encontraron Cabañas" });
        }
      
        res.json(result);
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal"
        })  
    }
};