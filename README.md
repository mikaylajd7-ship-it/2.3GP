# Mongoose Integration - Guided Practice

**Student:** Mikayla Dickerson  
**Date:** November 26, 2026  
**Course assignment:** Guided Practice - Mongoose Integration

## Overview

This project extends the supplied MEAN/MVC starter application by integrating Mongoose with MongoDB. It retains the starter home page and adds a Mongoose connection, a User schema, a user controller, and a REST endpoint for creating users.

## Features and assignment requirements

- Keeps the starter application's Express/EJS home page (`GET /`) displaying **Hello World** and the student's name.
- Adds Mongoose version **7.2.3** to `package.json`.
- Configures the development database as `mongodb://127.0.0.1/mean-book`.
- Adds `config/mongoose.js` and connects to MongoDB before Express begins listening.
- Defines a Mongoose `User` schema with `firstName`, `lastName`, `email`, `username`, and `password`.
- Registers the User model during Mongoose configuration.
- Adds `POST /users` to save a user document.
- Returns `User Added` after a successful save.

## Project structure

```text
MongooseIntegrationPerformanceAssessment/
├── app/
│   ├── controllers/
│   │   ├── index.server.controller.js
│   │   └── user.server.controller.js
│   ├── models/
│   │   └── user.server.model.js
│   ├── routes/
│   │   ├── index.server.routes.js
│   │   └── user.server.routes.js
│   └── views/
│       └── index.ejs
├── config/
│   ├── env/
│   │   ├── development.js
│   │   ├── production.js
│   │   └── test.js
│   ├── config.js
│   ├── express.js
│   └── mongoose.js
├── public/
│   └── img/
│       └── logo.png
├── evidence_examples/
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Setup and run

1. Install and start MongoDB Community Server locally. Confirm that MongoDB is listening on `127.0.0.1:27017`.
2. Open this repository folder in Visual Studio Code.
3. Open the integrated terminal in the project root.
4. Install packages:

   ```bash
   npm install
   ```

5. Start the application:

   ```bash
   node server
   ```

   Or use `npm start`.

6. Open `http://localhost:3000/`. The starter page should display **Hello World** and **Mikayla Dickerson**.

The application connects to the `mean-book` database. MongoDB creates the database when the first document is saved.

## Test the user API

Keep the server running. In Git Bash, send the POST request below:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"firstName":"First","lastName":"Last","email":"user@example.com","username":"username","password":"password"}' http://localhost:3000/users
```

Expected successful response:

```text
User Added
```

The VS Code server terminal should show the POST request and the saved Mongoose document. You can verify the record in MongoDB Compass by connecting to `mongodb://127.0.0.1:27017`, opening `mean-book`, and viewing the `users` collection.

## Important implementation notes

- `server.js` awaits the Mongoose connection before opening port 3000. This avoids accepting API requests before the database connection is ready.
- `config/mongoose.js` registers the User model before the controller requests it.
- `user.server.controller.js` catches save errors and returns an HTTP 400 JSON response instead of leaving a failed request unanswered.
- The schema follows the five fields specified in the guided practice. The sample password is for local practice only; a real application must hash passwords before storing them.

## GitHub submission

Create a repository with a name such as `MongooseIntegrationPerformanceAssessment`, add a Node `.gitignore`, copy these project files into it, add the instructor as a collaborator, and commit and push the completed source code.
