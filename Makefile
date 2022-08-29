.PHONY:
.SILENT:

build-image:
	docker build -t app ./docker/app