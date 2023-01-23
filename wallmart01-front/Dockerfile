# First stage
FROM node:19-alpine3.16 as build
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install && npm run ng build

# Second stage
FROM nginx:1.23.3-alpine
# Set the workin directory for my project
WORKDIR /usr/share/nginx/html
# remove the default nginx static files
RUN rm -rf ./*
# add nginx.conf to files
COPY /nginxconf/nginx.conf /etc/nginx/
# copy the static content formt he builder stage
COPY --from=build /app/dist/wallmart01-front .
#exposing port 8080 for usage
EXPOSE 8080
# Container run the nginx with global directive and daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

