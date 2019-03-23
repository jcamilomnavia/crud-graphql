# Express Project

This is an example of a expressjs project using routes and a no-sql database (mongoDB Atlas) with mongoose. Trying to use the S.O.L.I.D principle

## Instalation

- Create folder with project name
- git init
- npm init
- create .gitignore
- ```git rm -r --cached .```
- ```git add .```
- ```npm i nodemon -save-dev```
- npm i standard babel-eslint -save-dev
- npm i express
- npm i mongoose
- create index.js file

- inside of package.json
    - "dev" : "nodemon index.js"
    - "lint" : standard --fix"

## Run

- Create run_dev.sh file like this:
    ```
    PORT=<port> DB_URL==mongodb+srv://admin:<PASSWORD>@xxxxx-xxxxx.xxxxx.net/<DB_NAME>?retryWrites=true npm run dev
    ```
- To run
- ```sh run_dev.sh```