create database documentation;

\c documentation

create table configuration(
    id serial primary key,
    types varchar(300),
    description varchar(12000)
);

create table utilisateur(
    id serial primary key,
    nom varchar(50),
    email varchar(50),
    mot_de_passe varchar(70)
);

create table footer(
    id serial primary key,
    texte varchar(500),
    version varchar(400)
);

create table information(
    id serial primary key,
    titre varchar(600),
    details varchar(15000)
);

create table endpoints_categorie(
    id serial primary key,
    nom varchar(600),
    details varchar(15000)
);

create table sous_categorie(
    id serial primary key,
    nom varchar(600),
    details varchar(15000),
    url varchar(300),
    methode varchar(300),
    categorie int references endpoints_categorie(id)
);

create table query(
    id serial primary key,
    nom varchar(600),
    types varchar(600),
    details varchar(15000),
    sous_categorie int references sous_categorie(id)
);


create table body(
    id serial primary key,
    nom varchar(600),
    types varchar(600),
    details varchar(15000),
    sous_categorie int references sous_categorie(id)
);

create table codes(
    id serial primary key,
    code varchar(600),
    details varchar(15000),
    sous_categorie int references sous_categorie(id)
);

ALTER TABLE sous_categorie
DROP CONSTRAINT fk_categorie;

ALTER TABLE sous_categorie
DROP CONSTRAINT sous_categorie_categorie_fkey;


CREATE VIEW view_body AS 
SELECT 
    b.id,
    b.nom, 
    b.types, 
    b.details, 
    sc.nom AS sous_categorie 
FROM 
    body AS b 
JOIN 
    sous_categorie AS sc ON sc.id = b.sous_categorie;

CREATE VIEW view_codes AS 
SELECT 
    c.id, 
    c.code, 
    c.details, 
    sc.nom AS sous_categorie 
FROM 
    codes AS c 
JOIN 
    sous_categorie AS sc ON sc.id = c.sous_categorie;
