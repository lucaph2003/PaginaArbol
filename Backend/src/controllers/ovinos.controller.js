import {pool} from '../db.js';

export const getOvinos = async (req,res) => {
    const [result] = await pool.query('SELECT * FROM Ovinos;');
    res.json(result);
};

export const findOvino = async (req,res) => {
    const {id} = req.body;
    const [rows] = await pool.query('SELECT * FROM Ovinos WHERE IdNumber = ? ;', [id]);
    res.json(rows);
};

export const getOvinoById = async (req,res) => {
    const {id} = req.body;
    const [rows] = await pool.query('SELECT * FROM ovinos WHERE IdNumber = ? ;', [id]);
    res.json(rows);
};

export const getParents = async (req,res) => {
    const {idMadre,idPadre} = req.body;
    const [Motherrows] = await pool.query('SELECT * FROM Ovinos WHERE IdNumber = ?;', [idMadre]);
    const [Fatherrows] = (await pool.query(' SELECT * FROM Ovinos WHERE IdNumber =  ?;', [idPadre]))
    const result = [Motherrows,Fatherrows];
    res.json(result);
};

export const getOvinoByCabania = async (req,res) => {
    const {id} = req.body;
    const [rows] = await pool.query('SELECT * FROM ovinos WHERE IdCabania = ? ;', [id]);
    res.json(rows);
};

export const postOvino = async (req,res) => {
    const {nombre,idCabania,fechaNacimiento,descripcionDestacada,Descripcion,Sexo,FotoPerfil,foto1,foto2,foto3,linkVideo,idPadre,idMadre,idOvino} = req.body;
    const [rows] = await pool.query('INSERT INTO Ovinos(Nombre,IdCabania,Nacimiento,Descripciondestacada,Descripcion,sexo,fotoperfil,foto1,foto2,foto3,linkvideo,idpadre,idmadre) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);', [nombre,idCabania,fechaNacimiento,descripcionDestacada,Descripcion,Sexo,FotoPerfil,foto1,foto2,foto3,linkVideo,idPadre,idMadre,idOvino]);
    res.json(rows);
};

export const putOvino = async (req,res) => {
    const {nombre,idCabania,fechaNacimiento,descripcionDestacada,Descripcion,Sexo,FotoPerfil,foto1,foto2,foto3,linkVideo,idPadre,idMadre,idOvino} = req.body;
    const [rows] = await pool.query('UPDATE Ovinos SET Nombre = ? ,  IdCabania = ? ,  Nacimiento = ?,  Descripciondestacada = ?,  Descripcion = ?,  Sexo = ?,  FotoPerfil = ?,  Foto1 = ?, Foto2 = ?, Foto3 = ?, LinkVideo = ?, IdPadre = ?, IdMadre = ? WHERE IdNumber = ? ;', [nombre,idCabania,fechaNacimiento,descripcionDestacada,Descripcion,Sexo,FotoPerfil,foto1,foto2,foto3,linkVideo,idPadre,idMadre,idOvino]);
    res.json(rows);
};

export const deleteOvino = async (req,res) => {
    const {id} = req.body;
    const [rows] = await pool.query('DELETE FROM Ovinos WHERE  IdNumber = ?;', [id]);
    res.json(rows);
};