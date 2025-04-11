dev:
	docker-compose up

stop:
	docker-compose down --remove-orphans

uninstall:
	rm -rf \
		node_modules \
		application/frontend/node_modules \
		application/frontend/dist \
		application/backend/node_modules \
		application/backend/dist \
		application/shared/node_modules \
		application/shared/dist \
		application/prisma/node_modules \
		application/prisma/dist \
	&& rm -f \
		application/frontend/tsconfig.tsbuildinfo \
		application/backend/tsconfig.tsbuildinfo \
		application/shared/tsconfig.tsbuildinfo \
		application/prisma/tsconfig.tsbuildinfo \
	
install:
	docker-compose run shared npm ci \
		&& docker-compose run shared npm run build \
		&& docker-compose run frontend npm ci \
		&& docker-compose run prisma npm ci \
		&& docker-compose run prisma npm run build \
		&& docker-compose run prisma npm run migrate \
		&& docker-compose run prisma npm run seed \
		&& docker-compose run backend npm ci \

lint:
	docker-compose run shared npm run lint \
		&& docker-compose run frontend npm run lint \
		&& docker-compose run prisma npm run lint \
		&& docker-compose run backend npm run lint \

migrate:
	docker-compose run prisma npm run migrate

seed:
	docker-compose run prisma npm run seed