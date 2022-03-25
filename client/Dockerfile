FROM node

WORKDIR /App

COPY ./package.json /App/

COPY ./package-lock.json /App/

RUN npm install npm uninstall framer-motion npm install framer-motion@4.1.17

COPY ./ /App/

CMD ["npm","start"]