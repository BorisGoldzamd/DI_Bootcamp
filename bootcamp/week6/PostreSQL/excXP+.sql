-- CREATE TABLE students(
-- id serial,
-- first_name varchar(100),
-- last_name varchar(100),
-- birth_date date
-- )

-- Insert data into the students table
-- INSERT INTO students (id, first_name, last_name, birth_date)
-- VALUES
--   (1, 'Marc', 'Benichou', '1998-11-02'),
--   (2, 'Yoan', 'Cohen', '2010-12-03'),
--   (3, 'Lea', 'Benichou', '1987-07-27'),
--   (4, 'Amelia', 'Dux', '1996-04-07'),
--   (5, 'David', 'Grez', '2003-06-14'),
--   (6, 'Omer', 'Simpson', '1980-10-03');

-- Fetch all data from the table
SELECT * FROM students;

-- Fetch first_names and last_names of all students
SELECT first_name, last_name FROM students;

-- Fetch the student with id equal to 2
SELECT * FROM students WHERE id = 2;

-- Fetch the student with last_name Benichou and first_name Marc
SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch students with last_names Benichou OR first_names Marc
SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch students whose first_names contain the letter 'a'
SELECT * FROM students WHERE first_name LIKE '%a%';

-- Fetch students whose first_names start with the letter 'a'
SELECT * FROM students WHERE first_name LIKE 'a%';

-- Fetch students whose first_names end with the letter 'a'
SELECT * FROM students WHERE first_name LIKE '%a';

-- Fetch students whose second to last letter of their first_names are 'a'
SELECT * FROM students WHERE SUBSTRING(first_name, LENGTH(first_name)-1, 1) = 'a';

-- Fetch students with id's equal to 1 AND 3
SELECT * FROM students WHERE id IN (1, 3);

-- Fetch students whose birth_dates are equal to or come after '2000-01-01'
SELECT * FROM students WHERE birth_date >= '2000-01-01';

