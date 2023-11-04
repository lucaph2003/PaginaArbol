import {pool} from '../db.js';

export const getCabanias = async (req,res) => {
    const [result] = await pool.query('SELECT * FROM Cabanias;');
    res.json(result);
};