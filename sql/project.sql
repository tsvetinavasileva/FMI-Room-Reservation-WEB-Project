
DROP DATABASE IF EXISTS project;
CREATE DATABASE project;
USE project;

SET NAMES utf8;

CREATE TABLE building(
buildingName VARCHAR(100),
latitude DOUBLE,
longitude DOUBLE
);

CREATE TABLE room(
type VARCHAR(50),
roomNumber VARCHAR(10),
buildingName VARCHAR(100),
seats INTEGER
);

CREATE TABLE feature(
featureName VARCHAR(50),
iconCode CHAR(8)
);

CREATE TABLE reservation(
roomNumber VARCHAR(10),
buildingName VARCHAR(100),
reservedFrom DATETIME,
reservedTo DATETIME,
personWhoReserved VARCHAR(50)
);

CREATE TABLE roomfeature(
roomNumber VARCHAR(10),
buildingName VARCHAR(100),
featureName VARCHAR(30)
);

----- Constraints -----
ALTER TABLE building ADD CONSTRAINT pk_building PRIMARY KEY(buildingName);

ALTER TABLE room ADD CONSTRAINT pk_room PRIMARY KEY(roomNumber,buildingName);

ALTER TABLE feature ADD CONSTRAINT pk_feature PRIMARY KEY(featureName);

ALTER TABLE reservation ADD CONSTRAINT pk_reservation PRIMARY KEY(roomNumber, buildingName);

ALTER TABLE roomfeature ADD CONSTRAINT pk_roomfeature PRIMARY KEY(roomNumber, buildingName, featureName);

----- Building Data ----
INSERT INTO building 
	VALUES('ФМИ', 42.674735, 23.330535);
    
INSERT INTO building 
	VALUES('ФХФ', 42.674929, 23.332668);    

INSERT INTO building 
	VALUES('ФЗФ', 42.674038, 23.329663);
    
INSERT INTO building 
	VALUES('Ректорат', 42.674735, 23.334752);
  
---- Features Data ----
INSERT INTO feature
	VALUES('Проектор', '&#xf03d;');
    
INSERT INTO feature 
	VALUES('Компютър', '&#xf108;');    
    

