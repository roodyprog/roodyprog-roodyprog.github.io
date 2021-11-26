QCM

1) INNODB
2) il s'applique aux types INT 
3) Data Query Langaguage
4) Data Manipulation Language
5) Data definition Language
6) data Control Language
7) La pourcentage total du nombre d'heures de vol faite par les pilotes.
8) Il ne met pas à jour la table pilote de manière effective, car autocommit est désactivé.
9) Nombre de compagnie(s) dont le nombre d'heures de vol est de moins de 200 heures.
10) Sélectionne les compagnies et leurs pilotes incluant les compagnies n'ayant pas de pilote et les pilotes n'ayant pas de compagnie.

TP1
nouvelle colonne 
ALTER TABLE pilots ADD salary TINYINT UNSIGNED, ADD salary_year TINYINT UNSIGNED;

UPDATE `pilots` SET `salary` = '2000' WHERE name= 'Alan';
UPDATE `pilots` SET `salary` = '1500' WHERE name= 'Tom';
UPDATE `pilots` SET `salary` = '1500' WHERE name= 'Yi';
UPDATE `pilots` SET `salary` = '2000' WHERE name= 'Sophie';
UPDATE `pilots` SET `salary` = '2000' WHERE name= 'Albert';
UPDATE `pilots` SET `salary` = '1500' WHERE name= 'Yan';
UPDATE `pilots` SET `salary` = '2000' WHERE name= 'Benoit';
UPDATE `pilots` SET `salary` = '3000' WHERE name= 'Jhon';
UPDATE `pilots` SET `salary` = '3000' WHERE name= 'Pierre';

SELECT name,salary , salary*12 AS salary_year FROM pilots;

exo1


