FROM node:12 as build
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN npm install --silent
COPY . .
RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf