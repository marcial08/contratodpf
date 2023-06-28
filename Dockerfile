# Etapa de construcción
FROM node:14-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN ng build --configuration production --base-href /contratos/

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist/app-frontend-contrato-page /usr/share/nginx/html/contratos
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]