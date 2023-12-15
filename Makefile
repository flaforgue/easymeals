lint:
	docker-compose run root yarn lint

uninstall:
	find . \( -name "node_modules" -o -name "dist" -o -name ".next" \) -type d -prune -exec rm -rf '{}' +