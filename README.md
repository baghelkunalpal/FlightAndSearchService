# welcome to flights services

## project setup

-clone the project on your local 
-Execute `npm install` on the same path as of your root directory of teh downloaded project
-create a `.env` file in the root directory and add the following environment variable
-`port = 3000`
-Inside the `src/congig` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "<YOUR_DB_USERNAME>",
    "password": <YOUR_DB_PASSWORD>,
    "database": "FlightsAndSearch",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```