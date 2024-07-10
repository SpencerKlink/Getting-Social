# Social Network API

This is a backend application for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This project uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/social-network-api.git
   cd social-network-api

   npm install

   npm start

   npm run dev

## Usage

Use Insomnia or Postman to interact with the API endpoints. Below are the available routes and their corresponding methods and request bodies.

## API Endpoints

### User Routes

1. **Get All Users**
   - **Method:** GET
   - **URL:** `http://localhost:3000/api/users`

2. **Get User by ID**
   - **Method:** GET
   - **URL:** `http://localhost:3000/api/users/:userId`

3. **Create User**
   - **Method:** POST
   - **URL:** `http://localhost:3000/api/users`
   - **Body (JSON):**
     ```json
     {
       "username": "john_doe",
       "email": "john.doe@example.com"
     }
     ```

4. **Update User**
   - **Method:** PUT
   - **URL:** `http://localhost:3000/api/users/:userId`
   - **Body (JSON):**
     ```json
     {
       "username": "john_doe_updated",
       "email": "john.doe_updated@example.com"
     }
     ```

5. **Delete User**
   - **Method:** DELETE
   - **URL:** `http://localhost:3000/api/users/:userId`

6. **Add Friend**
   - **Method:** POST
   - **URL:** `http://localhost:3000/api/users/:userId/friends/:friendId`

7. **Remove Friend**
   - **Method:** DELETE
   - **URL:** `http://localhost:3000/api/users/:userId/friends/:friendId`

### Thought Routes

1. **Get All Thoughts**
   - **Method:** GET
   - **URL:** `http://localhost:3000/api/thoughts`

2. **Get Thought by ID**
   - **Method:** GET
   - **URL:** `http://localhost:3000/api/thoughts/:thoughtId`

3. **Create Thought**
   - **Method:** POST
   - **URL:** `http://localhost:3000/api/thoughts`
   - **Body (JSON):**
     ```json
     {
       "thoughtText": "Here's a cool thought...",
       "username": "john_doe",
       "userId": "60d0fe4f5311236168a109ca"
     }
     ```

4. **Update Thought**
   - **Method:** PUT
   - **URL:** `http://localhost:3000/api/thoughts/:thoughtId`
   - **Body (JSON):**
     ```json
     {
       "thoughtText": "Here's an updated thought..."
     }
     ```

5. **Delete Thought**
   - **Method:** DELETE
   - **URL:** `http://localhost:3000/api/thoughts/:thoughtId`

6. **Add Reaction to Thought**
   - **Method:** POST
   - **URL:** `http://localhost:3000/api/thoughts/:thoughtId/reactions`
   - **Body (JSON):**
     ```json
     {
       "reactionBody": "This is a reaction",
       "username": "john_doe"
     }
     ```

7. **Remove Reaction from Thought**
   - **Method:** DELETE
   - **URL:** `http://localhost:3000/api/thoughts/:thoughtId/reactions/:reactionId`

## Models

### User
    {
    "username": "String, Unique, Required, Trimmed",
    "email": "String, Unique, Required, Must match a valid email address",
    "thoughts": ["Array of _id values referencing the Thought model"],
    "friends": ["Array of _id values referencing the User model (self-reference)"]
    }

    {
    "thoughtText": "String, Required, Must be between 1 and 280 characters",
    "createdAt": "Date, Set default value to the current timestamp",
    "username": "String, Required",
    "reactions": ["Array of nested documents created with the reactionSchema"]
    }

    {
    "reactionId": "Use Mongoose's ObjectId data type, Default value is set to a new ObjectId",
    "reactionBody": "String, Required, 280 character maximum",
    "username": "String, Required",
    "createdAt": "Date, Set default value to the current timestamp"
    }


## Walkthrough Video

[https://drive.google.com/file/d/1Hc2R-nxeSe5512SlKrJ-aqbafBA8Q-QN/view?usp=sharing](#)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License.