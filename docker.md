# docker config

1. docker run --name mysqlcrud -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=taskdb -p 3306:3306 -d mysql
2. docker ps
3. docker exec -it mysqlcrud bash
