# MongoDB Express React NodeJS (MERN) Reference Implementation

This is an example implementation of a Hotel review system
The following technologies are used:

User can add review which are mapped to their Id and if they login again they can edit aur remove them

- MongoDB Atlas for the database
- Express and Node.JS for the backend API
- React for the client

## Prerequisites

The following are required:

- MongoDB Atlas account with the sample dataset loaded onto a cluster (includes database sample_restaurants)
- Node.JS

The backend and frontend are setup with npm and npx

### Backend

Create with `npm`

```
$ npm init -y
```

The following modules can then be installed

```
$ npm install express cors mongodb dotenv
```

Configure the `.env` file with the MongoDB Atlas connection URL. This should point to the example `sample_restaurants` database that is available to install when a cluster is setup.

```
RESTREVIEWS_DB_URI=mongodb+srv://[username]:[password]@[cluster]/sample_restaurants?retryWrites=true&w=majority
RESTREVIEWS_NS=sample_restaurants
PORT=5000
```

### Frontend

Create with `npx` and install the necessary frameworks.

```
$ npx create-react-app frontend
$ npm install bootstrap
$ npm install react-router-dom
$ npm install react-router-dom
```

## Running this Implementation

### Start the NodeJS and Express Backend

Run

```
$ nodemon server
```

Nodemon will listen for file changes and automatically update the application without needing to restart. The server starts on port 5000.

### Start the React Frontend

Run

```
$ npm start
```

Visit <a>http://localhost:3000</a>.
