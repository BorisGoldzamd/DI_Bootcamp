-- CREATE TABLE items (
-- 	product_id serial,
--     product_name VARCHAR(255),
--     product_price INTEGER
-- );

-- -- Crear la tabla "costumers"
-- CREATE TABLE costumers (
-- 	customer_id serial,
--     customer_name VARCHAR(255),
--     customer_lastname VARCHAR(255)
-- );

-- INSERT INTO items (product_name, product_price) VALUES
--   ('Small Desk', 100),
--   ('Large Desk', 300),
--   ('Fan', 80);

-- -- Agregar nuevos clientes a la tabla "customers"
-- INSERT INTO costumers (customer_name, customer_lastname) VALUES
--   ('Greg', 'Jones'),
--   ('Sandra', 'Jones'),
--   ('Scott', 'Scott'),
--   ('Trevor', 'Green'),
--   ('Melanie', 'Johnson');

-- Consultar todos los datos de la tabla "customers"
-- SELECT * FROM items;
-- SELECT product_name FROM items WHERE product_price > 80 
-- SELECT product_name FROM items WHERE product_price < 300 
-- SELECT customer_name FROM costumers WHERE customer_lastname = 'Smith' 
-- SELECT customer_name FROM costumers WHERE customer_lastname = 'Jones'
SELECT customer_name FROM costumers WHERE customer_name != 'Scott' 