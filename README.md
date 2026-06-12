# User Management CRUD API

A simple RESTful CRUD API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. This project demonstrates basic backend operations including creating, retrieving, updating, and deleting user records.

## Features

* Create User
* Get All Users
* Update User
* Delete User
* MongoDB Database Integration
* RESTful API Design

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* Nodemon

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
database_url=mongodb://127.0.0.1:27017/userDB
```

### Start MongoDB

Make sure MongoDB service is running on your machine.

### Run Project

```bash
npm start
```

Server will run at:

```text
http://localhost:3000
```

## API Endpoints

### Create User

```http
POST /api/createUser
```

### Get All Users

```http
GET /api/users
```

### Update User

```http
PUT /api/updateUser/:id
```

### Delete User

```http
DELETE /api/deleteUser/:id
```

## Sample Request Body

```json
{
  "name": "Unair",
  "email": "unair@gmail.com",
  "password": "0086"
}
```

## Author

Unair Faridi
~Backend Development with Node.js and MongoDB
