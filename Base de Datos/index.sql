--Crear base de datos y las tablas
CREATE DATABASE Ovinos;
USE Ovinos;

CREATE TABLE Usuarios(

IDNumber int(10) auto_increment 
Nombre Varchar(50),
Apellido Varchar(50),
FechaAlta DATE,
Email Varchar(50),
Pass Varchar(50),
IdCabania int(10), --Foreign key
Codigo varchar(50),
PRIMARY KEY(IDNumber)

)

CREATE TABLE Cabanias(

IDCbania int(10) unique auto_increment,
Nombre Varchar(50)

)

CREATE TABLE Ovinos(

IDNumber int(10) auto_increment
Nombre VARCHAR(50),
IdCabania Varchar(50), --Foreign key
Nacimiento DATE,
Descripciondestacada Varchar(30),
Descripcion Varchar(500),
Sexo int(5),
FotoPerfil blob,
Foto1 blob,
Foto2 blob,
Foto3 blob,
LinkVideo varchar(100),
ID Padre  INT(10),
ID MAdre  INT(10),
PRIMARY KEY(IDNumber)
 
)

CREATE TABLE HistorialArbolesCreados(
IDcreacion int(10), auto_increment
Idusuario int(10),
Fecha Date
)


    





--Consultas

