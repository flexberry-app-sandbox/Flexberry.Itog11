docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itog11-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itog11-java/app ../../..
