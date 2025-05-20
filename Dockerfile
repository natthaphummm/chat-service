FROM node:24 AS build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci && npm run build

FROM node:24-slim
RUN useradd -m appuser
USER appuser
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

CMD ["node", "dist/server.js"]