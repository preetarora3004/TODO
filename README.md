<!-- PROJECT TITLE -->

  <h3 align="center">To-Do Application Backend</h3>

  <p align="center">
    The one place to manage all your tasks.
  </p>

<!-- ABOUT THE PROJECT -->

## About the Project

### Built With

- [Express.js]()
- [MongoDB]()
- [Node.js]()
- [Mongoose]()

### Libraries Used

- [Bcrypt] 

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run To-Do Application Backend.

- Node.js (Version: >=25.x)
- MongoDB (Version: >=8.x)
- Yarn _(recommended)_

## Development

### Setup

1. Clone the repo (or fork https://github.com/preetarora3004/TODO).

   ```sh
   git clone https://github.com/preetarora3004/TODO.git
   ```

2. Go to the project folder

   ```sh
   cd TODO
   ```

3. Install packages with yarn

   ```sh
   yarn
   ```

4. Set up your `.env` file

   - Duplicate `.env.example` to `.env`
   - Use `openssl rand -base64 32` to generate a key and add it under `JWT_SECRET` in the `.env` file.

5. Setup Node
   If your Node version does not meet the project's requirements as instructed by the docs, "nvm" (Node Version Manager) allows using Node at the version required by the project:

   ```sh
   nvm use
   ```

   You first might need to install the specific version and then use it:

   ```sh
   nvm install && nvm use
   ```

   You can install nvm from [here](https://github.com/nvm-sh/nvm).

**Default credentials created:**

| Email | Password |
|-------|----------|
| `free@example.com` | `free` |

You can use any of these credentials to sign in at route [http://localhost:3000/user/signin](http://localhost:3000/user/signin)

#### Development tip

1. Go to MongoDB Atlas cluster and create a free cluster. Wait until it is deployed.

2. Create a database user by going to <b>Database Access</b> and add <b>Add New Database User</b>.

3. Set `<username>` and `<password>` and give <b>Read & Write</b> access.

4. Go to <b>Clusters</b> and click <b>Connect</b>.

5. Select <b>Connect using MongoDB Compass</b>

6. Copy the connection string. You'll see something like `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/`.

7. Add your database name in the string `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<db-name>`

8. Configure environment variables in the `.env` file. Replace `<username>`, `<password>`, `cluster0.xxxxx.mongodb.net>`, and `<db-name>` with their applicable values

   ```
   DATABASE_URL='mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<db-name>'
   ```

9. Run (in development mode)

   ```sh
   yarn dev
   ```

#### Setting up your first user

##### Approach 1

1. Download and Open [PostMan](https://www.postman.com/) or any other API client to send request via HTTP:

2. Click on the `Create Request` and choose `HTTP`.
3. Choose `POST` and fill out the <b>URL</b> with `http://localhost:3000/user/signup`.
4. Click on <b>Body</b> and choose <b>raw</b>.
5. Fill out the body with 

    ```javascript
    {   "username": "your-username",
        "password": "your-password",
        "name": "your-name"
    }
    ```
6. Click <b>Send</b>. You will get a response with status code `201` and 
    ```javascript
    {
        "success": true,
        "data": {
            "token" : "generated-token"
        }
    }
    ```

### Structure

```
└── app
    ├── backend
    │   └── src
    │       ├── middleware
    │       ├── modules
    │       │   ├── task
    │       │   └── user
    │       └── types
    └── db

```