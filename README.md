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
    "username": "root",
    "password": "Your_Password",
    "database": "Db_Name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```