CREATE DATABASE Ovinos;
USE Ovinos;

CREATE TABLE Usuarios(

IdNumber int auto_increment,
Nombre Varchar(50),
Apellido Varchar(50),
FechaAlta DATE,
Email Varchar(50),
Pass Varchar(50),
IdCabania int,
Codigo varchar(50),
PRIMARY KEY(IdNumber)
);

CREATE TABLE Cabanias(

IdCabania int unique auto_increment,
Nombre Varchar(50), 
PRIMARY KEY(IdCabania)
);

CREATE TABLE Ovinos(

IdNumber int auto_increment,
Nombre VARCHAR(50),
IdCabania int, 
Nacimiento DATE,
Descripciondestacada Varchar(30),
Descripcion Varchar(500),
Sexo int (1),
FotoPerfil blob,
Foto1 blob,
Foto2 blob,
Foto3 blob,
LinkVideo varchar(100),
IdPadre int,
IdMadre int,
PRIMARY KEY(IdNumber),
CONSTRAINT CHK_Sexo CHECK (Sexo=1 OR Sexo =2)
);

CREATE TABLE HistorialArbolesCreados(
Idcreacion int auto_increment primary key, 
Idusuario int,
Fecha Date
);

ALTER TABLE Ovinos	
ADD CONSTRAINT FK_Ovinos
FOREIGN KEY (IdCabania) 
REFERENCES Cabanias(IdCabania);

ALTER TABLE Usuarios	
ADD CONSTRAINT FK_Usuarios
FOREIGN KEY (IdCabania) 
REFERENCES Cabanias(IdCabania);


#INGRESO DE DATOS

INSERT INTO Cabanias(IdCabania, Nombre)
VALUES ("1","CABAÑA DE LOS CEIBOS"),
	   ("2","CABAÑA DE LOS ANDES"),
       ("3","CABAÑA DE LOS TRONCOS"),
       ("4","CABAÑA DE LAS REMOLACHAS"),
       ("5","CABAÑA DE LAS CEBOLLAS"),
       ("6","CABAÑA DE LAS PLANTAS"),
       ("7","CABAÑA DE LOS INDIOS"),
       ("8","CABAÑA DE LOS NOTALOCOS"),
       ("9","CABAÑA DE LOS PIBES");

INSERT INTO Usuarios(Nombre, Apellido,FechaAlta, Email,Pass, IdCabania, Codigo)
VALUES("Jose", "De las Praderas", "2022-3-17", "josedelaspraderas@gmail.com", "meolvide8","1","a179"),
	  ("MANUEL", "DE LAS CIERRAS", "2022-5-17", "MANUdelaspraderas@gmail.com", "meolvide7","2","a180"),
      ("PEPE", "DE LOS RINCONES", "2022-1-17", "PEPEdelaspraderas@gmail.com", "meolvide6","3","a181"),
      ("JUANA", "DE LOS SOLES", "2022-6-17", "JUANAdelaspraderas@gmail.com", "meolvide5","4","a182"),
	  ("MANUELITO", "DE NARNIA", "2022-4-17", "MANUELITOdelaspraderas@gmail.com", "meolvide4","5","a183"),
      ("CHIMUELO", "DE COMO ENTRENAR A MI DRAGON", "2022-9-17", "CHIMUELOdelaspraderas@gmail.com", "meolvide","6","a184"),
	  ("RODRIGO", "EL POTRO", "2022-8-17", "RODRIGOdelaspraderas@gmail.com", "meolvide3","7","a185"),
      ("VENITO", "TOCA EL CAÑO", "2022-7-17", "VENITOdelaspraderas@gmail.com", "meolvide2","8","a186"),
      ("MANUELA", "CON LAS MANOS", "2022-5-17", "MANUELAdelaspraderas@gmail.com", "meolvide1","9","a187");

INSERT INTO Ovinos(Nombre, IdCabania,  Descripciondestacada, Sexo, IdPadre, IdMadre )
VALUES("LOLA",1,"MUY RARA","2","1","2"),
      ("LOLO",1,"MUY RARA ","1","1","2"),
      ("LOLITA",1,"MUY RARA ","2","1","2"),
      ("LULU",4,"MUY RARA","1","1","2"),
      ("LORASA",5,"MUY RARA ","2","1","2");


#CONSULTAS

#LOGIN
SELECT Nombre, Pass 
FROM Usuarios
WHERE Nombre = Nombre AND Pass = Pass ;

#ObtenerNombre
SELECT Nombre 
FROM Cabanias
WHERE IdCabania = IdCabania;

#ListarTodos
SELECT *
FROM Ovinos;


SELECT *
FROM Cabanias;

SELECT *
FROM Ovinos
WHERE Nombre LIKE 'LO%' AND IdCabania = 1;

SELECT *
FROM Ovinos
WHERE IdNumber = 5 ;

SELECT *
FROM Ovinos
WHERE IdNumber = IdMadre ;

SELECT *
FROM Ovinos
WHERE IdNumber = IdPadre ;

#OBTENER ANIMALES DE CABANIA
SELECT *
FROM ovinos
WHERE IdCabania = 1 ;

#INSERT INTO Ovinos(Nombre, IdCabania,  Descripciondestacada, Sexo, IdPadre, IdMadre);

#UPDATE Ovinos
#SET Nombre = valor que le das ,  IdCabania = valor que le das ,  Nacimiento = valor que le das ,  Descripciondestacda = valor que le das,  Descripcion = valor que le das,  Sexo = valor que le das,  FotoPerfil = valor que le das,  Foto1 = valor que le das, Foto2 = valor que le das, Foto3 = valor que le das, LinkVideo = valor que le das, IdPadre = valor que le das, IdMadre = valor que le das      
#WHERE ACA VA CONDICION;

    #DELETE FROM NOMBRE DE LA TABLA
    #WHERE  LA CONDICION = EL VALOR;