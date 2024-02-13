# Start project:

## Server

1. Move to the `/server` directory
2. Create a .env file based on .env.example
3. Fill with your credentials (SQL database)
4. Install dependencies `npm run install`
5. Run `npm run dev`

## Client

1. Move to the `/client` directory
2. Install dependencies `npm run install`
3. Start project `npm run dev`
4. Go to `http://localhost:5173`

## Database (Optional)

There's a docker-compose file in the root file that can be used to create a Postregres database instance.

1. Run `docker-compose build` for building the images
2. Run `docker-compose up` for running the database

# Next steps:

- Finish tests and add test coverage
- Add GitHub Actions
- Persist token in Cookie https instead of the local storage
- Finish TODOs across the app
- Finish docker-compose for fullstack app

## Server

- Use uuid instead of autoincrement
- Implement data validations as middleware with an external library (ex Joi)
- Setup for Prod, Dev and Testing

## Client

- Declare Redux selector in features folder
- Proper form validation (probably with external library)
- Add more granularity to server errors
- Use RTK Query to cache results
- Add scss with mixings
- Enhance how errors are displayed in the UI (ex. Card)
- Add loaders/skeletons
- Back button in details page
- In the details page, create endpoint to retrieve a single character

## External dependencies

## Server

- Prisma --> ORM to easily interact with the database
- bcrypt --> hash passowrds
- jsonwebtoken --> create encrypted tokens to manage sessions
- helmet --> help set secure HTTP response headers
- cors --> to handle browser's cors policy
- dotenv --> manage environment variables
- morgan --> get activity logs for debugging
- prettier --> format the code consistently
- nodemon --> avoid manual server refresh when working in development

## Client

- Axios
- React-router-dom
- React-interection-observer

# Prisma ORM commands:

- prisma db push --> force your schema to the database (like Sequelize "force")
- npx prisma studio --> launch Prisma Studio to view and edit the data in your database (UI for db)
- npx prisma introspect --> populate your Prisma schema file with Prisma models that represent your database schema
- prisma-erd-generator-markdown --> To generate DB diagram

# Testing Strategy for Server

### For the modules:

- favorite
- user
- characters

- Test the different scenarios like in the examples in "user/**tests**/\*", example: success calls, force errors, etc
- Mock the db and test the integration of handlers and services.
- Optionally, we could add unit tests to the services

### apiRouter

- Routes do not need to be tested because are already tested in the modules
- Middlewares are called and work as expected

### utils

- Each function might have different needs but the idea would be to cover all the scenarios. But I would focus on:
- Authotization tokens
- Error handling
