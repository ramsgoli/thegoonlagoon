# Build Stage
FROM alpine:3.8

# Download and install packages
RUN apk add -U nginx python make g++ nodejs npm yarn

RUN mkdir -p /var/working

WORKDIR /var/working
COPY package*.json yarn.lock /var/working/
RUN npm install

COPY public/ /var/working/public/
COPY src/ /var/working/src/

RUN yarn build

# Run Stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /data/www/
COPY --from=0 /var/working/build/ /data/www/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
