# AuthSystem (Node.js + Express + JWT)

A simple authentication system built with **Node.js**, **Express**, **JWT**, and **bcrypt**.  
Supports **Signup**, **Login**, **Logout**, and **Protected Routes** using HTTP-only cookies.

---

## 🚀 Features
- User Signup (password hashing with bcrypt)
- User Login (JWT generation)
- Logout (clears auth cookie)
- Protected route support (JWT middleware)
- Cart route protected by JWT cookie auth
- CORS headers configured for a local frontend (`http://localhost:3000`)

---

## 🔗 Frontend pairing
This backend can be paired with the Cinebook movie ticketing client shared here:
- https://github.com/nikhilsharma2407/21-days-project-batch-1/tree/master/cinebook-movie-ticketing-system-client

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- JWT
- bcrypt
- cookie-parser

---

## 📦 Installation

```bash
git clone <your-repo-url>
cd AuthSystem
npm install
npm start
```

Server runs on `http://localhost:4000`.

## 📮 API routes
- `GET /user` - health route
- `POST /user/signup` - create user
- `POST /user/login` - login and set cookie
- `GET /user/logout` - clear cookie
- `POST /cart/add` - add product to user cart (auth required)
