UPDATE products
SET name = ${name}, price = ${price}, img = ${img}
where id = ${id}
returning *;