FROM node:22-alpine AS build
WORKDIR /app

RUN npm i -g npm@11

COPY package*.json ./
RUN npm ci

COPY . .
ENV DATABASE_URL=postgresql://build:build@localhost:5432/build
RUN npm run db:generate && npm run build

# runtime 
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN npm i -g npm@11

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/prisma ./prisma
COPY --from=build /app/prisma.config.ts ./prisma.config.ts
COPY --from=build /app/dist ./dist

USER node
EXPOSE 4000
CMD ["npm", "run", "start:docker"]
