-- INSERT INTO test2(product_name, product_price)
-- -- VALUES ('1MAC4', 1800),('Iphone15', 1750)
-- SELECT product_price,product_id,product_name FROM test2
-- -- UPDATE test2 
-- -- SET product_price = 650
-- -- WHERE product_id = 2
-- DELETE FROM test2
-- WHERE product_price > 700
SELECT product_name || ' ' || product_price as name_price
from test2

