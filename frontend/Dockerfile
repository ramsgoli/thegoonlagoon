# Build Stage
FROM alpine:3.8

# Download and install packages
RUN apk add -U nginx python make g++ nodejs npm yarn

RUN mkdir -p /var/build

WORKDIR /var/build
COPY package*.json yarn.lock /var/build
RUN npm install

COPY public/ /var/build/public/
COPY src/ /var/build/src/

RUN yarn build

# Run Stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /data/www/
COPY --from=0 /var/build/ /data/www

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
