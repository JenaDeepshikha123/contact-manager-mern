# 📒 MERN Contact Manager

A Full Stack Contact Manager application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This application allows users to manage contacts with complete CRUD functionality.

---

## 🚀 Features

- ➕ Add a new contact
- 📋 View all contacts
- ✏️ Edit existing contacts
- ❌ Delete contacts
- ✅ Form validation
- 📧 Email format validation
- 📱 Phone number validation (10 digits)
- 🌐 RESTful API integration
- 💾 MongoDB Atlas database connectivity

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS3
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### API Testing
- Postman

---

## 📁 Project Structure

```
contact-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-github-username/contact-manager-mern.git
```

### Navigate to the project

```bash
cd contact-manager-mern
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd backend
npm start
```

### Start Frontend

```bash
cd frontend
npm start
```

Frontend:

```
http://localhost:3000
```

Backend:

```
http://localhost:5000
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /contacts | Get all contacts |
| GET | /contacts/:id | Get a contact by ID |
| POST | /contacts | Add a new contact |
| PUT | /contacts/:id | Update a contact |
| DELETE | /contacts/:id | Delete a contact |

---

## 📚 What I Learned

- React Components and Hooks
- REST API Development
- Express.js Routing
- MongoDB CRUD Operations
- Mongoose ODM
- Axios API Integration
- Form Validation
- Backend Validation
- Error Handling
- Git & GitHub

---

## 🔮 Future Improvements

- User Authentication
- Search Contacts
- Responsive Design
- Dark Mode
- Contact Profile Pictures
- Export Contacts
- Pagination

---

## 👩‍💻 Author

**Deepshikha Jena**

⭐ If you found this project helpful, don't forget to give it a star!
