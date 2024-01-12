-- UPDATE film
-- SET language_id = 1
-- WHERE 
--   title = 'African Egg';

--4 SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE return_date IS NULL;

-- SELECT
--   film.title,
--   film.rental_rate,
--   rental.return_date
-- FROM
--   rental
-- JOIN
--   inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN
--   film ON inventory.film_id = film.film_id
-- WHERE
--   rental.return_date IS NULL
-- ORDER BY
--   film.rental_rate DESC
-- LIMIT 30;

--1` SELECT film.title, film.description, film.release_year, film.rental_rate, film.replacement_cost
-- FROM film
-- JOIN film_actor ON film.film_id = film_actor.film_id
-- JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE film.description ILIKE '%sumo%' AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';

--2 SELECT title, description, length, rating
-- FROM film
-- WHERE length < '100' AND rating = 'R';

--3 SELECT film.title, rental.rental_date, rental.return_date
-- FROM rental
-- JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- WHERE rental.customer_id = (SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name = 'Mahan')
-- AND film.rental_rate > 4.00
-- AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

--4 SELECT title, description, replacement_cost
-- FROM film
-- WHERE 'boat' IN (LOWER(title), LOWER(description)) AND replacement_cost > 100.00;



