🚀 Authentication POC – React, Express & MongoDB

This project is a Proof of Concept (POC) demonstrating a basic authentication system with Login, Registration, Protected Dashboard, and Logout functionality.

The purpose of this project is to showcase programming skills, authentication flow, and frontend–backend integration, not UI design.

🧰 Tech Stack
Frontend --

React.js

Tailwind CSS

Axios

React Router DOM

React Toastify (for API error messages)

Backend --

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcryptjs


✨ Features


User Registration with validation

User Login with validation

JWT-based authentication

Protected Dashboard (accessible only when logged in)

Logout functionality

Password hashing using bcrypt

Unique email validation

API error handling with toast notifications

📁 Project Structure
Task/
│
├── client/        # Frontend (React + Tailwind)
│
├── server/        # Backend (Express + MongoDB)
│
└── README.md
🖥️ Frontend Setup (React)
📂 Navigate to frontend
cd client
📦 Install dependencies
npm install
▶️ Start frontend server
npm start

Frontend will run at:

http://localhost:3000
🔐 Frontend Pages

/ → Login Page

/register → Registration Page

/dashboard → Protected Dashboard

Dashboard is accessible only after login.

⚙️ Backend Setup (Express + MongoDB)
📂 Navigate to backend
cd server

📦 Install dependencies

cd client
npm install

cd server
npm install


🔑 Environment Variables

Create a .env file inside the server folder:

MONGO_URI=mongodb://127.0.0.1:27017/defineway_auth
JWT_SECRET=your_secret_key
▶️ Start backend server
node index.js

OR (if nodemon is installed):

npx nodemon index.js

Backend will run at:

http://localhost:5000
🔗 API Endpoints
Register
POST /api/auth/register

Body:

{
  "username": "John",
  "email": "john@gmail.com",
  "password": "Password@123"
}
Login
POST /api/auth/login

Body:

{
  "email": "john@gmail.com",
  "password": "Password@123"
}


🔐 Authentication Flow


User registers or logs in

Backend generates a JWT token

Token is stored in localStorage

Dashboard route is protected

On logout, token is cleared


🛡️ Validations

Frontend Validation

Email format validation

Password must contain:

At least 1 uppercase letter

At least 1 special character

Minimum 6 characters

Backend Validation

Duplicate email check

Password hashing

Secure JWT generation



🧪 Testing Checklist


✅ Register with new email

❌ Register with existing email (toast error)

✅ Login with correct credentials

❌ Login with wrong credentials (toast error)

❌ Access dashboard without login

✅ Logout redirects to login

📦 Database Export (For Submission)

Export MongoDB database:

mongodump --db defineway_auth

Include the dump folder in submission zip.

📌 Notes

UI design is kept minimal as per requirement

Focus is on authentication logic and clean code

Passwords are never stored in plain text

This project is suitable for interview demonstration