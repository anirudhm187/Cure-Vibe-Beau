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
```
#### 2. Backend Setup
Navigate to the backend directory:
```bash
cd backend
```
Install backend dependencies:

```bash
npm install
```
Start the backend server:

```bash
nodemon app.js
```
#### 3. Frontend Setup
Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```
Install frontend dependencies:

```bash
npm install
```
Start the frontend development server:

```bash
npm start
```
#### 4. Access the Application
The application frontend will run on http://localhost:3000.
The backend server will be active at http://localhost:5000.

#### Folder Structure 📂

```plaintext
Cure-Vibe-Beau/
├── backend/
│   ├── models/               # Mongoose models for MongoDB
│   ├── routes/               # API routes (users, donors, etc.)
│   ├── controllers/          # Business logic for routes
│   ├── middleware/           # Authentication and error handling
│   └── app.js                # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page-level components
│   │   ├── utils/            # Utility functions
│   │   ├── App.js            # Main React app
│   │   └── index.js          # React entry point
│   └── public/               # Static files
└── README.md                 # Project documentation
```
## Features in Action 🎥

### 1. Real-Time COVID-19 Stats
- Displays live updates of COVID cases fetched from an external API.

### 2. Medicine Shopping Cart
- Users can browse medicines, add them to a cart, and place an order.

### 3. Blood Donor Search
- Users can find local donors by blood group or register themselves as donors.

---

## Technologies Used 🛠️

### Frontend
- **React**: Component-based architecture for building UIs.
- **CSS**: For styling and responsiveness.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Backend web framework for API development.

### Database
- **MongoDB**: NoSQL database for data storage.

### Other Tools
- **JWT**: Secure token-based authentication.
- **Bcrypt**: For encrypting user passwords.
- **Axios**: To handle HTTP requests.

## Future Enhancements ✨

- **User Order History**: Provide users with a history of their past orders for better tracking and management.
- **Blood Donor Notifications**: Notify donors via email or SMS when a request matches their blood type, improving response times.
- **Payment Gateway Integration**: Incorporate online payment options for placing orders to enhance user convenience.
- **Enhanced Search**: Improve search functionality for both blood donors and medicines to ensure more accurate and faster results.

## Screenshots 📸

### Homepage
![image](https://github.com/user-attachments/assets/0fb0d266-72a8-404c-a0c9-a4beb08bb5e5)

![image](https://github.com/user-attachments/assets/49145c53-0ca4-46c4-95b0-fddf41a54faa)



### Buy Page 
![image](https://github.com/user-attachments/assets/ababd3e2-6e62-4e67-8f5e-cf45c7c87c83)

![image](https://github.com/user-attachments/assets/6baf1669-29e6-4c63-a04e-2d8631932e89)



### Lab Test Page
![image](https://github.com/user-attachments/assets/2057624c-4d6e-40ea-9ca2-707b227962fb)

![image](https://github.com/user-attachments/assets/6bde1bfc-5b72-4824-977b-7745d803361f)

### Donor Page
- **Join Donor**
  ![image](https://github.com/user-attachments/assets/08fcba54-1072-49b4-bf99-b9f57ebffa38)
- **Find Donor**
 ![image](https://github.com/user-attachments/assets/6d0af00c-87ab-4a8f-a2c9-2a187e370abd)


### Cart Page
![image](https://github.com/user-attachments/assets/befd557c-8241-46ae-95b9-42cfbc29a234)

![image](https://github.com/user-attachments/assets/0639ac24-5ec2-46a8-b85c-4e52dc30043c)




