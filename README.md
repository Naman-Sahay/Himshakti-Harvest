# HimShakti Harvest

A full-stack web application for showcasing authentic Himalayan food products. The application is built using Next.js for the frontend and Express.js for the backend.

## Tech Stack

* Frontend: Next.js, React, Tailwind CSS
* Backend: Node.js, Express.js
* API Testing: Postman
* Version Control: Git & GitHub

## Features

* Responsive user interface
* Product listing fetched from backend REST API
* Search endpoint for products
* RESTful CRUD APIs
* Error handling middleware
* Environment variable support using dotenv

## Frontend Setup

1. Install dependencies:

```bash
npm install
```

2. Start the frontend:

```bash
npm run dev
```

3. Open:

```
http://localhost:3000
```

## Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```
PORT=5000
```

4. Start the backend:

```bash
npm run dev
```

5. The backend will run at:

```
http://localhost:5000
```

## REST API Endpoints

* GET `/api/products`
* GET `/api/products/:id`
* POST `/api/products`
* PUT `/api/products/:id`
* DELETE `/api/products/:id`
* GET `/api/products/search/:keyword`

## Author

Naman Sahay
