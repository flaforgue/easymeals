lint:
	docker-compose run root yarn lint

install:
	docker-compose run root yarn

uninstall:
	rm -rf \
		node_modules \
		application/frontend/node_modules \
		application/frontend/.next \
		application/backend/node_modules \
		application/backend/dist \
		application/shared/node_modules \
		application/shared/dist \
	&& rm -f \
		tsconfig.tsbuildinfo \
		application/frontend/tsconfig.tsbuildinfo \
		application/backend/tsconfig.tsbuildinfo \
		application/shared/tsconfig.tsbuildinfo \
	
migrate:
	docker-compose run prisma yarn migrate