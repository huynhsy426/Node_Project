CREATE DATABASE node_report;
USE node_report;

CREATE TABLE drinks(
	drinkID char(5) primary key, 
    name NVARCHAR(100),
    drunkness int
);

CREATE TABLE users(
	userID INT primary key AUTO_INCREMENT,
    username nvarchar(100),
    password nvarchar(100)
);

-- drop table drinks

INSERT INTO drinks values
('DR000', 'Bloody Mary', 3),
('DR002','Martini', 5),
('DR001','Scotch', 10)
;


INSERT INTO users values
('asd',3),
('sy',7),
('qwe',4),
('zxc',8)
;


select * from drinks;

DELETE FROM Drinks WHERE drinkID = 'DR212';

DELETE FROM Drinks WHERE drinkID IN ('DR001','DR002');