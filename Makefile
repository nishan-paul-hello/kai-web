# Variables
APP_NAME=kai-app
PORT=3000

.PHONY: build up down restart logs clean help kill-port

# Default command
help:
	@echo "Available commands:"
	@echo "  make build   - Build the Docker images"
	@echo "  make up      - Aggressively clear port $(PORT) and start containers"
	@echo "  make down    - Stop and remove the containers"
	@echo "  make restart - Restart the containers"
	@echo "  make logs    - View real-time container logs"
	@echo "  make clean   - Remove unused Docker data"

build:
	docker compose build

up: kill-port
	docker compose up -d --remove-orphans
	@echo "App is running at http://localhost:$(PORT)"

down:
	docker compose down --remove-orphans

restart: down up

logs:
	docker compose logs -f

clean:
	docker system prune -f

kill-port:
	@echo "Aggressively clearing port $(PORT)..."
	@# 1. Kill any host process using fuser (very reliable on Linux)
	@-fuser -k $(PORT)/tcp 2>/dev/null || true
	@# 2. Fallback to lsof if process still exists
	@if lsof -Pi :$(PORT) -sTCP:LISTEN -t >/dev/null; then \
		echo "Killing remaining host process on port $(PORT)..."; \
		lsof -ti :$(PORT) | xargs kill -9 || true; \
	fi
	@# 3. Stop any Docker container using this port
	@CONTAINER_ID=$$(docker ps -q --filter "publish=$(PORT)"); \
	if [ ! -z "$$CONTAINER_ID" ]; then \
		echo "Stopping Docker container(s) using port $(PORT): $$CONTAINER_ID"; \
		docker stop $$CONTAINER_ID || true; \
	fi
	@sleep 1
