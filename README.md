# Realtime Chat Application (MERN)

A real-time chat application built with the MERN stack and Socket.IO, enabling authenticated users to exchange messages instantly.  
This project focuses on real-time communication, secure authentication, and scalable backend architecture.

---

## 🚀 Features

- User authentication (Signup / Login)
- JWT-based authentication and protected routes
- One-to-one real-time messaging
- Live message delivery using Socket.IO
- Online/offline user status handling
- Persistent chat history stored in MongoDB
- Secure REST APIs for user and message management
- Clear separation of frontend and backend logic

---

## 🛠 Tech Stack

**Frontend**
- React.js
- HTML5, CSS3

**Backend**
- Node.js
- Express.js

**Real-Time Communication**
- Socket.IO

**Database**
- MongoDB
- Mongoose

**Authentication**
- JWT (JSON Web Tokens)

**Tools**
- Git & GitHub
- Postman

---

## 🔐 Authentication Flow

- Users authenticate using JWT-based login
- Access to protected APIs requires a valid token
- Socket connections are authorized for authenticated users
- Unauthorized users cannot send or receive messages

---

## 📁 Project Structure

```text
mern-realtime-chat/
├── client/             # React frontend
├── server/
│   ├── controllers/    # Request handling logic
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── middleware/     # Authentication & custom middleware
│   ├── config/         # Environment & database configuration
│   └── server.js       # Backend entry point
├── README.md
