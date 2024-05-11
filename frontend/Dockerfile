FROM node:alpine3.19 AS BUILD

WORKDIR /com

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

#===========================

FROM nginx:alpine3.19 AS RUN

WORKDIR /usr/shr/nginx/html

COPY --from=BUILD /com/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]