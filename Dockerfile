# # Etapa de construcción
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN ng build --configuration production --base-href /contratos/

# # Etapa de producción
# FROM nginx:alpine
# COPY --from=build /app/dist/app-frontend-contrato-page /usr/share/nginx/html/contratos
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# Etapa de construcción
FROM node:14.17.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --prod

# Etapa de producción
FROM nginx:1.21.0-alpine as production-stage
COPY --from=build-stage /app/dist/app-frontend-contrato-page /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]