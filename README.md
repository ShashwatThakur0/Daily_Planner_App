# To-do App

This is a full-stack to-do application built with Vite React for the frontend and Node.js with MongoDB for the backend. The app features a modern iPhone-style interface with glass morphism effects and smooth animations.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Connecting to MongoDB](#connecting-to-mongodb)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Add, edit, and delete to-do items
- Mark to-do items as completed
- Filter tasks by date
- Modern iPhone-style interface
- Glass morphism effects
- Smooth animations and transitions
- Responsive design
- Real-time updates
- Scrollable task list with fade effects

## Tech Stack
### Frontend
- React with Vite
- Tailwind CSS for styling
- Axios for API requests
- React Icons
- Modern UI components

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose ODM
- CORS for cross-origin requests

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (v4.4 or higher)

## Installation

### Client
1. Navigate to the `client` directory:
    ```bash
    cd client
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

### Server
1. Navigate to the `server` directory:
    ```bash
    cd server
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

## Running the App

### Client
1. Start the client development server:
    ```bash
    npm run dev
    ```
2. The app will be available at `http://localhost:5173`

### Server
1. Start the server:
    ```bash
    npm run dev
    ```
2. The server will run on `http://localhost:5000`

## Connecting to MongoDB
1. Create a `.env` file in the `server` directory and add your MongoDB connection string:
    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```
2. Ensure MongoDB is running locally or provide a remote connection string.

## Usage
1. Open `http://localhost:5173` in your browser
2. Add new tasks using the input field
3. Click on a task to mark it as completed
4. Use the date picker to filter tasks by date
5. Click the edit icon to modify a task
6. Click the delete icon to remove a task

## API Endpoints
- `GET /api/get` - Get all tasks for a specific date
- `POST /api/save` - Create a new task
- `PUT /api/update/:id` - Update a task
- `DELETE /api/delete/:id` - Delete a task

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License
This project is licensed under the MIT License.
