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
-Once you have added your db config as listed above go to the src folder from your terminal and executed ` npx sequelize db:created
and then execute 
`npx sequelize db:migrate `
```
## DB Design
 - Airplane Table
 - Flight
 - Airport
 - City
 

 -A flight belongs to an airplane but one airplane can be used to multiple flights 
 - A city has many airports but one airport belongs to a city
 - One airport can have many flights, but a flights belongs to one airport


 ## Tables

 ### City -->id, name, created_at , upadated_at
 ### Airport --> id, name, address, city_id, created_at, update_at
    Relationship --> City has many airports and Airpost Belongs to a city (one to many)

    ```
    npx sequelize model:generate --name Airport --attributes
    name:String,address:String,cityId:integer
    ```

