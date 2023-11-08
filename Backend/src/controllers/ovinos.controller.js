import {pool} from '../db.js';

export const getOvinos = async (req,res) => {
    try{
        const [result] = await pool.query('SELECT * FROM Ovinos;');

        if (result.length <= 0) {
            return res.status(404).json({ message: "No se encontraron Ovinos" 
            });
        }
      
        res.json(result);
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal"
        })  
    }
};

export const getOvinoById = async (req,res) => {
    const { id } = req.params;
    try{
        const [result] = await pool.query('SELECT * FROM Ovinos WHERE IdNumber = ? ;', [id]);

        if (result.length <= 0) {
            return res.status(404).json({ message: "No se encontraron Ovinos con ese id" });
        }
      
        res.json(result);
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal"
        })  
    }
};

export const getParents = async (req,res) => {
    const {idMadre,idPadre} = req.body;
    try{
        const [Motherrows] = await pool.query('SELECT * FROM Ovinos WHERE IdNumber = ?;', [idMadre]);
        const [Fatherrows] = (await pool.query(' SELECT * FROM Ovinos WHERE IdNumber =  ?;', [idPadre]))
        const result = [Motherrows,Fatherrows];

        if (result.length <= 0) {
            return res.status(404).json({ message: "No se encontraron Los padres" });
        }
      
        res.json(result);
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal"
        }) 
    }
};

export const getOvinoByCabania = async (req,res) => {
    const { id } = req.params;
    try{
        const [result] = await pool.query('SELECT * FROM ovinos WHERE IdCabania = ? ;', [id]);

        if (result.length <= 0) {
            return res.status(404).json({ message: "No se encontraron Ovinos para esa cabania" });
        }
      
        res.json(result);
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal"
        })
    }
};

export const postOvino = async (req,res) => {
    const {nombre,idCabania,fechaNacimiento,descripcionDestacada,Descripcion,Sexo,FotoPerfil,foto1,foto2,foto3,linkVideo,idPadre,idMadre,idOvino} = req.body;
    try{
        const [result] = await pool.query('INSERT INTO Ovinos(Nombre,IdCabania,Nacimiento,Descripciondestacada,Descripcion,sexo,fotoperfil,foto1,foto2,foto3,linkvideo,idpadre,idmadre) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);', [nombre,idCabania,fechaNacimiento,descripcionDestacada,Descripcion,Sexo,FotoPerfil,foto1,foto2,foto3,linkVideo,idPadre,idMadre,idOvino]);
        
        if (result.length <= 0) {
            return res.status(404).json({ message: "No se pudo insertar" });
        }
      
        res.json(result);
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal"
        }) 
    }
};

export const putOvino = async (req,res) => {
    const {nombre,idCabania,fechaNacimiento,descripcionDestacada,Descripcion,Sexo,FotoPerfil,foto1,foto2,foto3,linkVideo,idPadre,idMadre,idOvino} = req.body;
    try{
        const [result] = await pool.query('UPDATE Ovinos SET Nombre = ? ,  IdCabania = ? ,  Nacimiento = ?,  Descripciondestacada = ?,  Descripcion = ?,  Sexo = ?,  FotoPerfil = ?,  Foto1 = ?, Foto2 = ?, Foto3 = ?, LinkVideo = ?, IdPadre = ?, IdMadre = ? WHERE IdNumber = ? ;', [nombre,idCabania,fechaNacimiento,descripcionDestacada,Descripcion,Sexo,FotoPerfil,foto1,foto2,foto3,linkVideo,idPadre,idMadre,idOvino]);
        if (result.length <= 0) {
            return res.status(404).json({ message: "No se pudo actualizar" });
        }
      
        res.json(result);
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal"
        }) 
    }
};

export const deleteOvino = async (req,res) => {
    const { id } = req.params;
    try{
        const [result] = await pool.query('DELETE FROM Ovinos WHERE  IdNumber = ?;', [id]);

        if (result.length <= 0) {
            return res.status(404).json({ message: "No se pudo eliminar" });
        }
      
        res.json(result);
    }catch (error){
        return res.status(500).json({
            message: "Algo fue mal"
        }) 
    }
};