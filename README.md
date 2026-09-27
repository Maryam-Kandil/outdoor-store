# Outdoor Store

A full-stack e-commerce web application for outdoor products, currently under development.

## Overview

Outdoor Store is a full-stack e-commerce web application designed to provide users with a simple way to browse outdoor products, view product details, manage their shopping cart, and place orders.

The project is being developed with a focus on applying software engineering fundamentals, database design, RESTful APIs, and frontend-backend integration.

## Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL
- `pg`
- `dotenv`

### Frontend
- React

### Development Tools
- Git
- GitHub
- Visual Studio Code

## Project Structure

```text
outdoor-store/
├── server/
│   ├── server.js
│   ├── db.js
│   └── routes/
│       ├── products.js
│       ├── categories.js
│       └── users.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Current API Endpoints
### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID with its category |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/categories` | Get all categories |
| GET | `/categories/:id/products` | Get products belonging to a category |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| POST | `/users` | Create a new user |

## Database

The project uses PostgreSQL as the relational database.

The current database schema includes the following tables:

- `users` — stores user information.
- `categories` — stores product categories.
- `products` — stores product information and stock quantities.
- `product_categories` — connects products with categories.
- `orders` — stores customer orders.
- `order_items` — stores the products included in each order.

The database is hosted using Supabase.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- PostgreSQL or a Supabase PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Maryam_Kandil/outdoor-store.git
cd outdoor-store 
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add your database connection string:

```env
DATABASE_URL=your_database_connection_string
```

4. Start the server:

```bash
node server/server.js
```

The server will run on:

```text
http://localhost:3000
```

## Project Status

The project is currently under active development.

### Completed

- PostgreSQL database schema and relationships
- Database connection using `pg`
- Express.js backend setup
- Product API endpoints
- Category API endpoints
- User API endpoints
- User creation using POST requests
- Basic error handling
- Git and GitHub repository setup


### In Progress

- User authentication and authorization
- Shopping cart
- Order management
- Product management
- React frontend
- Frontend-backend integration
- Testing and deployment

## Security

- Database credentials and environment variables are stored in a `.env` file.
- The `.env` file is excluded from version control using `.gitignore`.
- Database queries use parameterized SQL queries to help prevent SQL injection.
- Sensitive credentials and tokens are not included in the repository.

## Future Improvements

- Add user authentication and authorization.
- Implement shopping cart functionality.
- Implement order creation and management.
- Add product creation, updating, and deletion.
- Build the frontend using React.
- Add input validation and improved error handling.
- Add automated tests.
- Deploy the application.