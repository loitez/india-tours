
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

#COPY . .

EXPOSE 3000

CMD ["npm", "run"]

## ПРОД
#RUN npm run build

## ПРОД
#FROM nginx:alpine
#COPY --from=build /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]