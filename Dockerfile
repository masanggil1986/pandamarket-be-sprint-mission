FROM node:24 AS builder

WORKDIR /build

COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build

FROM node:24-alpine AS runner

WORKDIR /app
COPY --from=builder /build/{package*.json,node_modules,build,prisma} ./

ENV BASE_URL=http://localhost:3000
ENV PORT=3000
EXPOSE 3000
VOLUME /app/public

CMD ["sh", "-c", "npx prisma deploy && npm run start"]