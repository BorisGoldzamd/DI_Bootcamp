1-- SELECT * from customer
-- SELECT 
2--   CONCAT(first_name, ' ', last_name) AS full_name
-- FROM 
--   customer;

3-- SELECT DISTINCT create_date
-- FROM customer;

-- 4SELECT *
-- FROM customer
-- ORDER BY first_name DESC;

--5 SELECT film_id, title, description, release_year, rental_rate from film ORDER BY rental_rate ASC

--6 SELECT 
--   customer.first_name,
--   customer.last_name,
--   address.address,
--   address.phone
-- FROM 
--   customer
-- JOIN 
--   address ON customer.address_id = address.address_id
-- WHERE 
--   address.district = 'Texas';

--7 SELECT * 
-- FROM film 
-- WHERE film_id IN (15, 150);

--8 SELECT * FROM film WHERE title = '500 seconds of summer'

--9 SELECT * FROM film WHERE LEFT (title, 2) = '50'

-- --10 SELECT 
--   film_id,
--   title,
--   rental_rate
-- FROM 
--   film
-- ORDER BY 
--   rental_rate
-- LIMIT 10;

--11 SELECT 
--   film_id,
--   title,
--   rental_rate
-- FROM 
--   film
-- ORDER BY 
--   rental_rate
-- OFFSET 10 ROWS
-- FETCH NEXT 10 ROWS ONLY;

--12 SELECT 
--   customer.first_name,
--   customer.last_name,
--   payment.amount,
--   payment.payment_date
-- FROM 
--   customer
-- JOIN 
--   payment ON customer.customer_id = payment.customer_id
-- ORDER BY 
--   customer.customer_id, payment.payment_id;

--13 SELECT 
--   film_id,
--   title
-- FROM 
--   film
-- WHERE 
--   film_id NOT IN (SELECT DISTINCT film_id FROM inventory);

--14 SELECT 
--   city.city_id,
--   city.city,
--   country.country
-- FROM 
--   city
-- JOIN 
--   country ON city.country_id = country.country_id;

-- SELECT 
--   payment.customer_id,
--   customer.first_name,
--   customer.last_name,
--   payment.amount,
--   payment.payment_date,
--   staff.staff_id
-- FROM 
--   payment
-- JOIN 
--   staff ON payment.staff_id = staff.staff_id
-- JOIN 
--   customer ON payment.customer_id = customer.customer_id
-- ORDER BY 
--   staff.staff_id, payment.payment_date;
