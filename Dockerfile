FROM node:14-alpine
RUN npm install -g http-server
WORKDIR /app
COPY . .
EXPOSE 3001
CMD ["http-server", "-p", "3001"]