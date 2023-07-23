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

- Once you have added your db config as listed above , go to src folder from your terminal and execute the `npx sequelize db:create`  and then execute the `npx sequelize db:migrate` .


#DB Design
- Airplane Table
- Flight Table
- City Table
- Airport Table


- A flight belongs to the airplane but an airplane can be used in multiple flights .
- A city has many airports but an airports belongs to one city .
- One airports can have multiple flights but flights belongs to the one airports .
- 
