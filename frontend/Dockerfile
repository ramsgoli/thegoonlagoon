FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /data/www
COPY src/index.html /data/www

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]