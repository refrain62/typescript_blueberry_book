FROM node:16.8.0

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /app

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]

