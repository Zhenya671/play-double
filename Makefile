.PHONY:
.SILENT:

build-image:
	docker build -t app ./docker/app

start:
	docker-compose up -d

stop:
	docker-compose stop

remove:
	docker-compose rm -s -a -f
