lint:
	docker-compose run root yarn lint

uninstall:
	find . -name "node_modules" -type d -prune -exec rm -rf '{}' +