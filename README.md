# Gerhard and Felix Restaurants

This project is a web application which you can use to browse different restaurants and see recommendations.

## Prerequisites

First you need to set MongoDB on your local system. Instructions here -> https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

Then install Node.js in you local system with command:

  ```sh
  sudo apt install nodejs
  ```

### Installation

_Alta löydät ohjeet sovelluksen käyttöönottoon paikallisessa kehitysympäristössä. Kaikki tarvittava sovelluksen käynnistystä varten löytyy tästä dokumentista._

1. Clone the repo
   ```sh
   git clone https://github.com/FelixWeiss98/WebDevTuDublinProjectReworked.git
   ```
2. Install node modules into `./server`
   ```sh
   npm install
   ```
3. Install node modules to client in `./`
   ```sh
    npm install
    ```
4. Instructions how to use Visual studio code with MongoDB -> https://code.visualstudio.com/docs/azure/mongodb
Populate database with file:
   ```sh
	dbCreate.mongodb
   ```
5. Set environment variables in  `server/.env`
   ```js
DB_USERNAME=user // db login username
DB_PASSWORD=password // db login password
PORT=3003 // Server port
SECRET_TOKEN=shhh // JWT secret hash
TOKEN_EXPIRE=1h // JWT expiration time
   ```
6. Run server in `./server`
   ```sh
   npm start
   ```
7. Run client in `./`
   ```sh
    npm start
    ```

