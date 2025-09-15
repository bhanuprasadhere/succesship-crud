# 📖 Succesship Contact Manager

A full-stack **MERN (MongoDB, Express, React, Node.js)** contact management application. Create, read, update, and delete contacts with ease!


## 🚀 Features

- ➕ **Add new contacts** - Store name and email
- 📋 **View all contacts** - See your complete contact list  
- ✏️ **Edit contacts** - Update contact information
- 🗑️ **Delete contacts** - Remove unwanted entries
- 🌐 **REST API** - Full backend API with Express + MongoDB
- ⚡ **Fast UI** - React frontend built with Vite

## 🛠️ Tech Stack

**Frontend:** React, Vite, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB with Mongoose  
**Dev Tools:** Nodemon, dotenv, CORS

## 📂 Project Structure

```
succesship-crud/
├── backend/                # Express + MongoDB API
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   ├── .env               # Environment variables
│   └── node_modules/
├── frontend/              # React + Vite app
│   ├── src/
│   │   ├── App.jsx        # Main component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Styles
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite config
│   └── node_modules/
└── README.md              # This file
```

## ⚙️ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or Atlas account)
- Git

### 1️⃣ Clone & Setup
```bash
git clone https://github.com/bhanuprasadhere/succesship-crud.git
cd succesship-crud
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "MONGO_URI=mongodb://127.0.0.1:27017/succesship-crud
PORT=5000" > .env

# Start backend server
npm run dev
```

✅ **Expected output:**
```
✅ MongoDB Connected
🚀 Server running on http://localhost:5000
```

### 3️⃣ Frontend Setup
```bash
# Open new terminal
cd frontend
npm install
npm run dev
```

✅ **Expected output:**
```
VITE v4.x.x ready in 500ms
➜ Local: http://localhost:5173/
```

🎉 **Open http://localhost:5173 in your browser!**

## 📡 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/items` | Get all contacts |
| `POST` | `/api/items` | Create new contact |
| `PUT` | `/api/items/:id` | Update contact |
| `DELETE` | `/api/items/:id` | Delete contact |

### Example Requests

**Create Contact:**
```json
POST /api/items
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "_id": "650f9d2e8a3c2f0012abc456",
  "name": "John Doe", 
  "email": "john@example.com"
}
```

## 🔧 Environment Variables

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/succesship-crud
PORT=5000

# For MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/succesship-crud
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**PALETI BHANU PRASAD REDDY**
- GitHub: [@bhanuprasadhere](https://github.com/bhanuprasadhere)
- LinkedIn: [bhanuprasadhere](https://www.linkedin.com/in/bhanuprasadhere/)

---

⭐ Star this repo if you found it helpful!