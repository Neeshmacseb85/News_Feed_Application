# News_Feed_Application

A simple full-stack web application that allows users to sign up, log in, and view a personalized news feed. Built with Node.js + Express on the backend and HTML/CSS/JavaScript on the frontend. Authentication is handled using JWT, and passwords are securely hashed with bcrypt.

## Features

🔐 User registration and login
🔑 JWT-based authentication
🧠 Password hashing with bcrypt
📰 Protected news feed for logged-in users
🔍 Live search/filter for news
👤 User profile page
🚪 Logout functionality
🎨 Shared CSS styling across pages

## Prerequisites

Before running the project,ensure you have the following installed:

*Node.js (v16 or above)
*A modern web browser (Chrome, Firefox, etc.)
*A code editor (VS Code recommended)
*Live Server extension (optional for frontend)

 ## Getting Started
 
 Follow these steps to setup and run the project on your local machine
 
## 1️. Clone the Repository
'''bash
git clone https://github.com/vinim20/News_Feed_Application
cd News_Feed_Application
'''

## 2️.Install Dependencies
'''bash
cd backend
npm install
'''

## 3️.Set Up Database

This project uses an in-memory array for demo purposes. No database setup is required.
For production, integrate MongoDB or SQLite.

## 4️. Run the Development Server
'''bash
node server.js
Server will start at: http://localhost:5000
'''

## 5️. Open the Application

Open frontend/signup.html in your browser or use Live Server:
'''
bash
cd frontend
Then right-click signup.html → "Open with Live Server"
'''

##  Project Structure

Code
news-feed-app/
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── signup.html
│   ├── login.html
│   ├── news.html
│   ├── profile.html
│   └── style.css

## Dependencies

Backend
*express — Web framework
*cors — Cross-origin resource sharing
*jsonwebtoken — JWT token generation and verification
*bcryptjs — Password hashing

Frontend
*Vanilla HTML, CSS, and JavaScript

## Contributing

Contributions are welcome! To contribute:
Fork the repository
Create a new branch (git checkout -b feature-name)
Make your changes
Commit and push (git commit -m "Add feature")
Submit a pull request

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it.

## Acknowledgements

*Node.js
*Express
*JWT
*bcryptjs
*Live Server
