FROM node:17 as base
WORKDIR /code
COPY package*.json .
RUN npm install
COPY . .
FROM base as built
FROM built as testall
CMD npm run --silent test:all
FROM built as testproblem
CMD npm run --silent test:problem
FROM built as coverage
CMD npm run --silent test:coverage