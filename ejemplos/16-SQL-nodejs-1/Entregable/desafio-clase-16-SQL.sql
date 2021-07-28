CREATE DATABASE mibase CHARACTER SET utf8;

CREATE TABLE items (
    nombre varchar(255) not null,
    categoria varchar(255) not null,
    stock int,
    id int not null auto_increment,
    CONSTRAINT items_pk PRIMARY KEY (id)
);


INSERT INTO items (nombre, categoria, stock) values ('Fideos', 'Harina', 20);
INSERT INTO items (nombre, categoria, stock) values ('Leche', 'Lácteos', 30);
INSERT INTO items (nombre, categoria, stock) values ('Crema', 'Lácteos', 15);

SELECT	*
FROM	items;

DELETE FROM items WHERE id = 1;

UPDATE	items SET stock = 45
WHERE	id = 2;

SELECT	*
FROM	items;