# Variables
APP_NAME=app_web
# PORT is set in .env — no default here

.PHONY: dev-lh build-lh up-lh refresh-lh \
        dev-ts build-ts up-ts refresh-ts cert-ts funnel-on funnel-off \
        down restart logs clean help kill-port

ifneq (,$(wildcard ./.env))
    include .env
    export
endif

# Default command
help:
	@echo "Available commands:"
	@echo "  Localhost (lh)"
	@echo "    make dev-lh           - Dev mode on localhost (hot reload, port from .env)"
	@echo "    make build-lh         - Build production image for localhost"
	@echo "    make up-lh            - Start production containers (localhost)"
	@echo "    make refresh-lh       - Deep rebuild for localhost"
	@echo ""
	@echo "  Tailscale (ts)"
	@echo "    make dev-ts           - Dev mode via Tailscale (hot reload)"
	@echo "    make build-ts         - Build production image for Tailscale"
	@echo "    make up-ts            - Start production containers (Tailscale)"
	@echo "    make refresh-ts       - Deep rebuild for Tailscale"
	@echo "    make cert-ts          - Provision Tailscale TLS certs"
	@echo "    make funnel-on        - Enable public access via Funnel"
	@echo "    make funnel-off       - Disable public access"
	@echo ""
	@echo "  Shared"
	@echo "    make down             - Stop all containers"
	@echo "    make restart          - Restart all containers"
	@echo "    make logs             - View all logs"

# --- Localhost (lh) ---

dev-lh: kill-port
	npm run dev -- --port $(PORT)

build-lh:
	docker compose build

up-lh: kill-port
	docker compose up -d --remove-orphans

refresh-lh: kill-port
	docker compose up -d --build --force-recreate -V --remove-orphans

# --- Tailscale (ts) ---

dev-ts: kill-port
	docker compose -f docker-compose.local-proxy.yml up -d
	@echo "Tailscale proxy is running. You can now run 'npm run dev' on your host."
	npm run dev -- --port $(PORT)

build-ts:
	docker compose -f docker-compose.yml -f docker-compose.ts.yml build

up-ts: kill-port
	docker compose -f docker-compose.yml -f docker-compose.ts.yml up -d --remove-orphans

refresh-ts: kill-port
	docker compose -f docker-compose.yml -f docker-compose.ts.yml up -d --build --force-recreate -V --remove-orphans

cert-ts:
	@docker exec ts_sidecar_local tailscale cert kai.tamarin-ph.ts.net 2>/dev/null || true

funnel_on:
	@sed -i '/\"AllowFunnel\": {/,/}/ s/: false/: true/' infra/tailscale/kai.json
	@docker compose -f docker-compose.yml -f docker-compose.ts.yml restart ts_sidecar

funnel_off:
	@sed -i '/\"AllowFunnel\": {/,/}/ s/: true/: false/' infra/tailscale/kai.json
	@docker compose -f docker-compose.yml -f docker-compose.ts.yml restart ts_sidecar

# --- Shared ---

down:
	docker compose -f docker-compose.yml -f docker-compose.ts.yml -f docker-compose.local-proxy.yml down --remove-orphans

restart:
	docker compose -f docker-compose.yml -f docker-compose.ts.yml restart

logs:
	docker compose -f docker-compose.yml -f docker-compose.ts.yml logs -f

clean:
	docker system prune -f

kill-port:
	@echo "Aggressively clearing port $(PORT)..."
	@-fuser -k $(PORT)/tcp 2>/dev/null || true
	@if lsof -Pi :$(PORT) -sTCP:LISTEN -t >/dev/null; then \
		lsof -ti :$(PORT) | xargs kill -9 || true; \
	fi
	@CONTAINER_ID=$$(docker ps -q --filter "publish=$(PORT)"); \
	if [ ! -z "$$CONTAINER_ID" ]; then \
		docker stop $$CONTAINER_ID || true; \
	fi
	@sleep 1
