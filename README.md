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

### Libraries Used

- Bcrypt 
- Dotenv
- Jsonwebtoken
- Mongoose
- Zod

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run To-Do Application Backend.

- Node.js (Version: >=24.x)
- MongoDB (Version: >=7.x)
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

1. Download and Open [PostMan](https://www.postman.com/) or any other API client to send request via HTTP:

2. Click on the `Create Request` and choose `HTTP`.
3. Choose `POST` and fill out the <b>URL</b> with `http://localhost:3000/user/signup`.
4. Click on <b>Body</b> and choose <b>raw</b>.
5. Fill out the body with 

    ```javascript
    {
        "username": "your-username",
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

#### Creating your first task

1. Open <b>PostMan</b> and click on the `Create Request` and choose `HTTP`.

2. Choose `POST` and fill out the <b>URL</b> with `http://localhost:3000/task/create-task`.

3. Copy the <b>token</b> generated from <b>SignUp</b> request.

4. Open <b>Headers</b> tab and create a key `Authorization` add it's value as `Bearer token-generated`.

5. In <b>Body</b>, fill out the body with

    ```javascript
    {
        "title": "First Task",
        "description": "Task's description", //optional
        "category": "work",
        "completeBy": "UTC-Date" // 2026-04-06T19:40:00.000Z
    }
    ```

6. Click <b>Send</b>. You will get a response with status code `201` and 

    ```javascript
    {
        "success": true,
        "data": {
            "task" : {
                "id" : "task._id",
                "title" : "task.title",
                "description" : "task.description",
                "category" : "task.category",
                "status" : "PENDING", // min time to set is +1 hour from creation time
                "compeleteBy" : "UTC-Date"
            }
        }
    }
    ```

#### Fetching all task

1. Open <b>PostMan</b> and click on the `Create Request` and choose `HTTP`.

2. Choose `GET` and fill out the <b>URL</b> with `http://localhost:3000/task/get-task`.

3. Copy the <b>token</b> generated from <b>SignUp</b> request.

4. Open <b>Headers</b> tab and create a key `Authorization` add it's value as `Bearer token-generated`.

5. In <b>Body</b>, fill out the body with

    ```javascript
    {   
        "title": "First Task",
        "description": "Task's description", //optional
        "category": "work",
        "completeBy": "UTC-Date" // 2026-04-06T19:40:00.000Z
    }
    ```

6. Click <b>Send</b>. You will get a response with status code `200` and 

    ```javascript
    {
        "success": true,
        "data": {
            "task" : {
                "id" : "task._id",
                "title" : "task.title",
                "description" : "task.description",
                "category" : "task.category",
                "status" : "PENDING", // min time to set is +1 hour from creation time
                "compeleteBy" : "UTC-Date"
            }[]
        }
    }
    ```

#### Fetching task grouped by category 

1. Open <b>PostMan</b> and click on the `Create Request` and choose `HTTP`.

2. Choose `GET` and fill out the <b>URL</b> with `http://localhost:3000/task/get-task`.

3. Copy the <b>token</b> generated from <b>SignUp</b> request.

4. Open <b>Headers</b> tab and create a key `Authorization` add it's value as `Bearer token-generated`.

5. In <b>Body</b>, fill out the body with

    ```javascript
    {
        "title": "First Task",
        "description": "Task's description", //optional
        "category": "work",
        "completeBy": "UTC-Date" // 2026-04-06T19:40:00.000Z
    }
    ```

6. Click <b>Send</b>. You will get a response with status code `200` and 

    ```javascript
    {
        "success": true,
        "data": {
            "task" : {
                "id" : "task._id",
                "title" : "task.title",
                "description" : "task.description",
                "category" : "task.category",
                "status" : "PENDING", // min time to set is +1 hour from creation time
                "compeleteBy" : "UTC-Date"
            }[]
        }
    }
    ```

#### Edit an existing task

1. Open <b>PostMan</b> and click on the `Create Request` and choose `HTTP`.

2. Choose `PATCH` and fill out the <b>URL</b> with `http://localhost:3000/task/edit-task/:taskId`.

3. Copy the <b>token</b> generated from <b>SignUp</b> request.

4. Copy the <b>Task Id</b> from the tasks that you want to edit, from the response of `http://localhost:3000/task/get-task`.

5. Paste it at the end of your <b>Edit task URL</b>.

6. Open <b>Headers</b> tab and create a key `Authorization` add its value as `Bearer token-generated`.

7. In <b>Body</b>, fill out the body with the detail you need to edit, either single key or all

    ```javascript
    {   
        "title": "Editied title",
        "description": "Edited description", //optional
        "category": "Edited category",
        "completeBy": "Edited UTC-Date" // 2026-04-06T19:40:00.000Z
    }
    ```

8. Click <b>Send</b>. You will get a response with status code `200` and the updated task

    ```javascript
    {
        "success": true,
        "data": {
            "task" : {
                "id" : "task._id",
                "title" : "task.title",
                "description" : "task.description",
                "category" : "task.category",
                "status" : "PENDING", // min time to set is +1 hour from creation time
                "compeleteBy" : "UTC-Date"
            }[]
        }
    }
    ```
#### Delete a task

1. Open <b>PostMan</b> and click on the `Create Request` and choose `HTTP`.

2. Choose `PATCH` and fill out the <b>URL</b> with `http://localhost:3000/task/delete-task/:taskId`.

3. Copy the <b>token</b> generated from <b>SignUp</b> request.

4. Copy the <b>Task Id</b> from the tasks that you want to delete, from the response of `http://localhost:3000/task/get-task`.

5. Paste it at the end of your <b>Delete task URL</b>.

6. Open <b>Headers</b> tab and create a key `Authorization` add its value as `Bearer token-generated`.

7. Click <b>Send</b>. You will get a response with status code `200` and

    ```javascript
    {
        "success": true,
        "data": {
            "title": "deletedTask.title"
        }
    }
    ```
#### Mark task as complete

1. Open <b>PostMan</b> and click on the `Create Request` and choose `HTTP`.

2. Choose `PATCH` and fill out the <b>URL</b> with `http://localhost:3000/task/mark-complete/:taskId`.

3. Copy the <b>token</b> generated from <b>SignUp</b> request.

4. Copy the <b>Task Id</b> from the tasks that you want to mark complete, from the response of `http://localhost:3000/task/get-task`.

5. Paste it at the end of your <b>Mark complete task URL</b>.

6. Open <b>Headers</b> tab and create a key `Authorization` add its value as `Bearer token-generated`.

7. Click <b>Send</b>. You will get a response with status code `200` and the updated task

    ```javascript
    {
        "success": true,
        "data": {
            "task" : {
                "id" : "task._id",
                "title" : "task.title",
                "description" : "task.description",
                "category" : "task.category",
                "status" : "COMPLETED",
                "compeleteBy" : "UTC-Date"
            }[]
        }
    }
    ```

## Structure

```
├── app                                      # Root application folder
│   ├── backend                              # Backend service (Node.js + TypeScript)
│   │   └── src                              # Main source code
│   │       ├── app.ts                       # Express app setup (middlewares, routes mounting)
│   │       ├── middleware                   # Custom middlewares
│   │       │   ├── auth.middleware.ts       # Handles authentication (JWT/session validation)
│   │       │   └── error.middleware.ts      # Global error handler (centralized error responses)
│   │       ├── modules                      # Feature-based modular architecture
│   │       │   ├── task                     # Task module (business logic related to tasks)
│   │       │   │   ├── task.controller.ts   # Handles HTTP requests/responses for tasks
│   │       │   │   ├── task.repository.ts   # DB layer (queries related to tasks)
│   │       │   │   ├── task.routes.ts       # API routes for task endpoints
│   │       │   │   ├── task.service.ts      # Business logic layer (core logic)
│   │       │   │   ├── task.types.ts        # TypeScript types/interfaces for task
│   │       │   │   ├── task.utils.ts        # Helper/utility functions for tasks
│   │       │   │   └── task.validator.ts    # Request validation (Zod)
│   │       │   └── user                     # User module (authentication/user management)
│   │       │       ├── user.controller.ts   # Handles user-related API requests
│   │       │       ├── user.repository.ts   # DB queries for user data
│   │       │       ├── user.routes.ts       # API routes for users (login/signup)
│   │       │       ├── user.service.ts      # Business logic for user operations
│   │       │       ├── user.types.ts        # Type definitions for user
│   │       │       └── user.validator.ts    # Input validation for user APIs (Zod)
│   │       ├── server.ts                    # Entry point (starts server, connects DB, listens on port)
│   │       └── types                        # Global TypeScript type extensions
│   │           ├── express.d.ts             # Extends Express types (e.g., req.user)
│   │           └── type.api.error.ts        # Custom API error type definitions
│   └── db                                   # Database layer
│       ├── connection.ts                    # DB connection setup (MongoDB/Mongoose config)
│       └── db.ts                            # Exports DB models/schemas (central access point)
├── package.json                             # Project metadata + dependencies + scripts
├── tsconfig.json                            # TypeScript configuration
└── yarn.lock                                # Dependency lock file (exact versions for reproducibility)

```

## Key Decisions

```md

### Task Status Handling Stratergy

Instead of relying on cron jobs or background workers to update task statuses, this system uses <b>dynamic time-based evaluation</b>.

Task states are derived at runtime by comparing the current time with the task’s deadline:

- `COMPLETED` → explicitly updated by the user and persisted in the database
- `PENDING / DUE` → computed dynamically based on time comparison

Since time is continuously changing, persisting `PENDING` and `DUE` states would require frequent database updates (e.g., every minute), which is inefficient and unnecessary.

By computing these states on demand:

- Database writes are minimized
- System load is reduced (no cron jobs or polling)
- Status values remain always accurate in real-time

This approach ensures a <b>scalable, efficient, and consistent</b> way to handle time-driven state.

### Error Handling Strategy

This project uses a centralized error handling approach.

Rather than returning error responses in every controller, errors are thrown and passed to a global error middleware using `next(error)`. The middleware is responsible for handling all errors and sending standardized responses.

Benefits:
- Eliminates repetitive try-catch response handling
- Ensures consistent error structure
- Improves code readability and maintainability

```