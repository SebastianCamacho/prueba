# Usa la versión de Node.js adecuada para tu proyecto
FROM node:20.11.1 AS build
WORKDIR /app
# Copia todos los archivos necesarios en un solo comando
COPY . /app/
# Instala las dependencias sin una etapa intermedia innecesaria
# COPY src/environments/environments.prod.ts ./src/environments/environments.prod.ts

RUN npm install 
RUN npm run build
# Construye la aplicación Angular en una etapa separada
FROM nginx:1.23.3 AS nginx
# Exporta el puerto 80
EXPOSE 80
# Copia el directorio de la aplicación Angular compilada a la ubicación correcta
COPY --from=build /app/dist/frontend-angular/browser /usr/share/nginx/html
COPY ./assets/env.sample.js /usr/share/nginx/html/assets/env.sample.js

# Inicia Nginx con la configuración por defecto
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.sample.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

