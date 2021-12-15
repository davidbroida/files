-- SOLUTIONS

-- 1. Join the two tables so that every column and record appears, regardless of if there is not an owner_id.

SELECT * 
FROM owners
FULL JOIN vehicles
ON owners.id = vehicles.owner_id;


-- 2. Count the number of cars for each owner. Display the owners first_name, last_name and count of vehicles.

SELECT first_name, last_name, COUNT(*)
FROM owners 
JOIN vehicles
ON owners.id = vehicles.owner_id
GROUP BY owners.first_name, owners.last_name
ORDER BY count ASC;

-- 3. Count the number of cars for each owner and display the average price for each of the cars as integers. Display the owners first_name, last_name, average price and count of vehicles. The first_name should be ordered in descending order. Only display results with more than one vehicle and an average price greater than 10000.

SELECT first_name, last_name, AVG(price) as average_price, COUNT(owner_id)
FROM owners
JOIN vehicles
ON owners.id = vehicles.owner_id
GROUP BY first_name, last_name
HAVING COUNT(owner_id) > 1 and AVG(price) > 10000
ORDER BY first_name DESC;


SELECT title, name
FROM movie
JOIN casting ON (movie.id = movieid AND ord =1)
JOIN actor ON (actor actor.id = actorid)
WHERE movie.id IN (SELECT movieid FROM casting
WHERE actorid IN (
  SELECT id FROM actor
  WHERE name='Julie Andrews'))

