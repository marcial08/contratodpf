# Etapa de construcción
FROM node:14-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist/app-frontend-contrato-page /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
