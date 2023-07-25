### Setup the project

- Clone this project
- Go inside the folder path and execute the following command:
```
  npm install
```
- In the root directory create a `.env` file and add the following env variable
    ```
        PORT=<port number of your choice>
    ```
- go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
- By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.
- In the config.json file under the development environment, write the username and password of your mysql database

- To run the server execute the below command in the root directory:
 ```
 npm start
 ```
