# QCM

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

# TP-1
## Exercice nouvelle colonne

1. Ajoutez la colonne salary, salaire annuel, dans la table pilots, définissez son type. Vous donnerez la requête SQL pour modifier la table. Puis faites une requête pour ajouter les salaires respectifs suivants :

```sql
ALTER TABLE pilots ADD salary INT UNSIGNED, ADD salary_year INT UNSIGNED;

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
```

```sql
SELECT name,salary , salary*12 AS salary_year FROM pilots;
```
```text
+--------+--------+-------------+
| name   | salary | salary_year |
+--------+--------+-------------+
| Alan   |   2000 |       24000 |
| Tom    |   1500 |       18000 |
| Yi     |   1500 |       18000 |
| Sophie |   2000 |       24000 |
| Albert |   2000 |       24000 |
| Yan    |   1500 |       18000 |
| Benoit |   2000 |       24000 |
| Jhon   |   3000 |       36000 |
| Pierre |   3000 |       36000 |
+--------+--------+-------------+
```
## Exercice 1)


1. Quel est le salaire moyen.
```sql
SELECT avg(salary) AS avg_salary
FROM pilots;
```
```text
+------------+
| avg_salary |
+------------+
|  2055.5556 |
+------------+
```
2. Calculez le salaire moyen par compagnie.
```sql
SELECT avg(salary) AS avg_salary, compagny
FROM pilots
GROUP BY compagny;
```
```text
+------------+----------+
| avg_salary | compagny |
+------------+----------+
|  2000.0000 | AUS      |
|  3000.0000 | CHI      |
|  2250.0000 | FRE1     |
|  1500.0000 | SIN      |
+------------+----------+
```
3. Quels sont les pilots qui sont au-dessus du salaire moyen.
```sql
SELECT name
FROM pilots
WHERE salary > (
    SELECT avg(salary)
    FROM pilots
);
```
```text
+--------+
| name   |
+--------+
| Jhon   |
| Pierre |
+--------+
```

4. Calculez l'étendu des salaires.
```sql
SELECT (max(salary) - min(salary)) AS salary_range
FROM pilots;
```
```text
+--------+
| name   |
+--------+
| Alan   |
| Sophie |
| Albert |
| Benoit |
+--------+
```

5. Quels sont les noms des compagnies qui payent leurs pilotes au-dessus de la moyenne ?
```sql
SELECT name
FROM compagnies
WHERE comp IN (
    SELECT compagny
    FROM pilots
    WHERE salary > (
        SELECT avg(salary)
        FROM pilots
    )
    GROUP BY compagny
);
```
```text
+------------+
| name       |
+------------+
| Air France |
| CHINA Air  |
+------------+
```
6. Quels sont les pilotes qui par compagnie dépasse(nt) le salaire moyen ?
```sql
SELECT name, compagny
FROM pilots
WHERE salary > (
    SELECT avg(salary)
    FROM pilots
)
GROUP BY compagny;
```
## Exercice 2

1. Faites une requête qui diminue de 40% le salaire des pilotes de la compagnie AUS.
```sql
UPDATE pilots
SET salary = salary * 0.6
WHERE compagny = 'AUS';
```
```text
+--------+----------+
| name   | compagny |
+--------+----------+
| Pierre | CHI      |
| Jhon   | FRE1     |
+--------+----------+
```

2. Vérifiez que les salaires des pilotes australiens sont tous inférieurs aux autres salaires des pilotes des autres compagnies.
```sql
SELECT name
FROM pilots
WHERE compagny = 'AUS' AND salary > (
    SELECT min(salary)
    FROM pilots
    WHERE compagny != 'AUS'
);
```
```text
+--------+
| name   |
+--------+
| Alan   |
| Sophie |
| Albert |
| Benoit |
+--------+
```
## Exercices de recherche

Pour chaque question ci-dessous créez la requête :

1. On aimerait savoir quels sont les types d'avions en commun que la compagnie AUS et FRE1 exploitent.

Indications : l'intersection de deux ensembles en MySQL s'implémente comme suit :

```sql
SELECT DISTINCT value FROM `table1`
WHERE value IN (
  SELECT value 
  FROM `table2`
);
```
reponse :
```sql
 SELECT DISTINCT p.compagny, plane
FROM pilots AS p
INNER JOIN compagnies AS c
ON p.compagny = c.comp
WHERE compagny IN (
  SELECT comp FROM compagnies
  )
GROUP BY compagny;
```
```text
+----------+-------+
| compagny | plane |
+----------+-------+
| AUS      | A380  |
| CHI      | A320  |
| FRE1     | A320  |
| SIN      | A340  |
+----------+-------+
```
2. Quels sont les types d'avion que ces deux compagnies AUS et FRE1 exploitent (c'est l'UNION ici) ?

Indications : Pensez à utiliser l'opérateur UNION.
```sql
SELECT DISTINCT plane
FROM pilots
WHERE compagny = 'AUS'
UNION
SELECT DISTINCT plane
FROM pilots
WHERE compagny = 'FRE1';

```
```text
+-------+
| plane |
+-------+
| A380  |
| A320  |
+-------+
```
# TP-1 bonus

```sql
CREATE TABLE plane` (
    `id` INT UNSIGNED AUTO INCREMENT
    `name` CHAR(5),
    `description` TEXT,
    `numFlying`  DECIMAL(8,1) NULL,
    CONSTRAINT pk_compagny PRIMARY KEY (`id`)
    ) ENGINE=InnoDB ;
```
