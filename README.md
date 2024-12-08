# **CardBuddy**

CardBuddy is a modern React-based web application designed for users to register, log in, and access a dashboard showcasing their virtual card details, balance, and transaction history. The backend is powered by Node.js, Express, and MongoDB, providing robust user management and data handling.  

## **Features**

- **User Registration**  
  New users can register with their name, email, and password. Upon registration, each user gets:  
  - A virtual card with a unique number and expiry date.  
  - Initial balance set to `$0`.  
  - An empty transaction history.  

- **User Authentication**  
  - Simple login with email and password.  
  - Authentication status managed using React state and local storage.  

- **User Dashboard**  
  - View virtual card details (number, expiry date).  
  - Check account balance.  
  - View transaction history.  

- **Simple Navigation**  
  - A clean and responsive Navbar adjusts based on the user’s authentication state.  
  - Access to home, login, logout, and dashboard pages.  

- **Enhanced UI/UX**  
  - Styled with **Tailwind CSS** and **DaisyUI** for a polished interface.  
  - Smooth animations using **Framer Motion**.  
  - Icons powered by **React Icons**.  

## **Tech Stack**

### **Frontend**
- **React.js**  
  - React Router DOM for navigation.  
  - React Hot Toast for notifications.  
  - **DaisyUI** for pre-styled, accessible components.  
  - **Framer Motion** for stunning animations.  
  - **React Icons** for consistent iconography.  

### **Backend**
- **Node.js + Express.js**  
  - RESTful API design for user management and authentication.  
- **MongoDB**  
  - User data storage including card details and transaction history.  
- **Mongoose**  
  - Database schema management.

## **Screenshots**

| ![Home Screen](https://via.placeholder.com/600x300?text=Home+Screen) | ![Dashboard](https://via.placeholder.com/600x300?text=Dashboard) |
|---|---|
| Home Page | Dashboard View |

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed:  
- **Node.js** (v16.x or higher)  
- **MongoDB** (locally or use MongoDB Atlas)  

### **Installation**

1. **Clone the repository**  
   ```bash
   git clone https://github.com/sakibnjr/CardBuddy_react.git
   cd cardbuddy
   ```

2. **Backend Setup**  
   - Navigate to the backend directory:  
     ```bash
     cd backend
     ```  
   - Install dependencies:  
     ```bash
     npm install
     ```  
   - Create a `.env` file in the backend directory with the following:  
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/cardbuddy
     ```  
   - Start the backend server:  
     ```bash
     npm start
     ```  

3. **Frontend Setup**  
   - Navigate to the frontend directory:  
     ```bash
     cd frontend
     ```  
   - Install dependencies:  
     ```bash
     npm install
     ```  
   - Start the React development server:  
     ```bash
     npm start
     ```  

### **Accessing the Application**

- Open your browser and visit: [http://localhost:3000](http://localhost:3000)

## **API Endpoints**

| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| POST   | `/api/register`   | Register a new user.       |
| POST   | `/api/login`      | Log in with email/password.|
| GET    | `/api/user`       | Fetch current user data.   |

## **Folder Structure**

```plaintext
cardbuddy/
├── backend/
│   ├── models/       # MongoDB models (e.g., User)
│   ├── routes/       # API endpoints
│   ├── server.js     # Express app entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components (e.g., Navbar)
│   │   ├── pages/       # Page components (e.g., Login, Dashboard)
│   │   ├── App.js       # Main app logic
│   ├── public/          # Static assets
```

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## **Contributing**

Contributions are welcome! Feel free to submit issues or pull requests to improve this project.

## **Contact**

For any inquiries, contact [sakibnjr@proton.me] or open an issue in the repository.
