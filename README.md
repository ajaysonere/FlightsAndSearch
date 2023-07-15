#Welcome to Flight Search Service

## Project Setup
- clone the project to your local setup.
- Execute `npm install ` on the same path as your root directory or downloaded project.
- Create a `.env` file on your root directory and the following environment variable 
    - PORT = 3000
- Inside `src/config` create a file `config.json` and then add the following peice of code .

```
{
  "development": {
    "username": <User name >,
    "password": <password>,
    "database": "Flight_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you have added your db config as listed above , go to src folder from your terminal and execute the `npx sequelize db:create` 
