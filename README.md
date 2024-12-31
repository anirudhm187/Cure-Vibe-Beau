# Cure Vibe Beau 🩺💊

**Cure Vibe Beau** is a full-stack healthcare web application that combines real-time COVID-19 updates, an e-commerce platform for medicines and lab tests, and a blood donor management system. This application is designed to simplify access to healthcare while providing secure and seamless functionalities to its users.

---

## Features 🚀

### 🦠 Real-Time COVID-19 Stats
- Displays live COVID-19 data, including confirmed cases, recoveries, and deaths.
- Data fetched from a public **COVID-19 API** for global updates.

### 🛍️ E-Commerce for Healthcare
- Users can browse a **catalog of medicines** and **pathological lab tests**.
- Add products to a **shopping cart** and **place orders**.

### 🩸 Blood Donor Management
- **Find local blood donors** using a local API.
- **Join as a blood donor**, with data securely stored in a **MongoDB cluster** for public access after verification.

### 🔐 Secure User Authentication
- **JWT authentication** for login and signup.
- **Bcrypt** for password encryption.

### 📋 Cart Functionality
- Add lab tests and medicines to the cart.
- Complete the checkout process to place orders.

---

## High-Level Design (HLD) 🏗️

### Architecture Overview:
1. **Frontend (React):**
   - Component-based architecture with reusable components.
   - State management handled with React hooks.
   - Interactive and responsive user interface.

2. **Backend (Node.js/Express):**
   - REST API to manage user authentication, orders, blood donor records, and COVID-19 stats integration.
   - Handles business logic and validation.

3. **Database (MongoDB):**
   - NoSQL database for storing:
     - User profiles.
     - Blood donor records.
     - Orders and product information.

4. **APIs:**
   - COVID-19 API for real-time stats.
   - Local API for managing and finding blood donors.

5. **Authentication:**
   - Secure token-based authentication using **JWT**.
   - Passwords encrypted with **Bcrypt**.

---

## Installation and Setup 🛠️

Follow these steps to run the **Cure Vibe Beau** application locally.

### Prerequisites
- **Node.js** (v16+)
- **MongoDB** (local or cloud cluster)
- **npm** (Node package manager)

---

### Steps to Run the Application:

#### 1. Clone the Repository
```bash
git clone https://github.com/anirudhm187/Cure-Vibe-Beau.git
cd Cure-Vibe-Beau
2. Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install backend dependencies:

bash
Copy code
npm install
Start the backend server:

bash
Copy code
nodemon app.js
3. Frontend Setup
Open a new terminal and navigate to the frontend directory:

bash
Copy code
cd frontend
Install frontend dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
4. Access the Application
The application frontend will run on http://localhost:3000.
The backend server will be active at http://localhost:5000.
Environment Variables 🌍
Create a .env file in the backend directory and configure the following variables:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
API_KEY=covid_api_key
```
Folder Structure 📂
php
Copy code
Cure-Vibe-Beau/
├── backend/
│   ├── models/            # Mongoose models for MongoDB
│   ├── routes/            # API routes (users, donors, etc.)
│   ├── controllers/       # Business logic for routes
│   ├── middleware/        # Authentication and error handling
│   └── app.js             # Main server file
│
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page-level components
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main React app
│   │   └── index.js       # React entry point
│   └── public/            # Static files
│
└── README.md              # Project documentation
Features in Action 🎥
Real-Time COVID-19 Stats

Displays live updates of COVID cases fetched from an external API.
Medicine Shopping Cart

Users can browse medicines, add to a cart, and place an order.
Blood Donor Search

Users can find local donors by blood group or register themselves as donors.
Technologies Used 🛠️
Frontend
React: Component-based architecture for building UIs.
CSS: For styling and responsiveness.
Backend
Node.js: JavaScript runtime environment.
Express: Backend web framework for API development.
Database
MongoDB: NoSQL database for data storage.
Other Tools
JWT: Secure token-based authentication.
Bcrypt: For encrypting user passwords.
Axios: To handle HTTP requests.
Future Enhancements ✨
User Order History: Show users a history of their past orders.
Blood Donor Notifications: Notify donors when a request matches their blood type.
Payment Gateway Integration: Add online payment options for orders.
Enhanced Search: Improve blood donor and medicine search functionalities.
