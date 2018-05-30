## User Authentication - Signup/Login with BCrypt

![Login](./app/src/img/LogIn.png)

Users Signup and Login application using BCrypt encryption.

<b>Please Note:</b>
- This repository contain two repositories; Express/Mongoose API code is in `/api` directory (managing data), and React code is in `/app` directory (frontend).
- Currently validation only applied to `login.jsx` file.

### Built-on:
- [Node.js](https://nodejs.org/en/) - Node Package Manager
- [React](https://facebook.github.io/react/) - An npm package to get you immediate access to React
- [React Router](https://reacttraining.com/react-router/) - Declarative routing for React
- [Express](http://expressjs.com/) - Web application framework
- [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for node.js
- [BCrypt](https://www.npmjs.com/package/bcrypt) - BCrypt algorithms based on Key Stretching

#### Initial Setup for `/api` directory:
- Create new MongoDB database called `authentication-bcrypt`
- Add new user with password to this account
- Create `.env` file in the root `/api` along side `package.json`
- Add newly created Mongo string `DATABASE_URL=mongodb://user:password@ds123450.mlab.com:12345/authentication-bcrypt`

#### Running the App:
To run this project you will need to download it onto your local machine and install all dependencies.
Navigate inside both `/api` and `/app` folders and install all dependencies by entering the following command on your terminal window:
```
npm install
```
Finally to run start API code and React code enter the following command in your terminal windows:
```
npm start --prefix api
npm start --prefix app
```
This will run the server and frontend, open [http://localhost:8080](http://localhost:8080) to view it in the browser. If you make any changes and save the changes process will automatically refresh and you will be able to see the results in the browser.

If you want to end the process hold `control` and press `c` in mac, if you are not using mac hold `ctrl` and press `c`.

#### BCrypt encryption applied to password
![Encryption](./app/src/img/Encryption.png)

#### BCrypt encryption appearing on MongoDb
![MongoDB](./app/src/img/MongoDB.png)

