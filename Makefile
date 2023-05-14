up:
	docker-compose up

up-prod:
	docker-compose -f docker-compose.prod.yml up

down: 
	docker-compose down

stop-all:
	docker kill $$(docker ps -a -q)

shell:
	docker-compose exec app sh

build:
	docker-compose up --build -d

start:
	docker start $$(docker ps -a -q)

stop:
	docker stop $$(docker ps -a -q)

rm-img:
	docker rmi $$(docker images -a -q)
