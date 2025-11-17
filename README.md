# 🎬 QuickShow – Movie Ticket Booking Application (MERN Stack)

QuickShow is a full-stack **movie ticket booking application** built using the **MERN stack**.  
It allows users to browse movies, view show details, select seats, make payments, and download booking confirmations.  
The system features **secure authentication**, **seat blocking logic**, **auto-release of unpaid seats**, and **Stripe payment integration**.

---

## 🚀 Features

### 👤 User Features
- User registration & login with **JWT-based authentication**
- Browse movies and view detailed show information
- Select up to **5 seats per booking**
- Temporarily blocked seats while user proceeds to payment
- Stripe payment integration (test mode)
- Auto-release of blocked seats after **10 minutes** if payment is not completed
- View booking history and ticket details

### 🎥 Admin Features (Optional if you add)
- Add/update/delete movies
- Manage shows, time slots, and pricing
- Monitor booked seats

---

## 🧠 Key Functionalities (Highlights)
- **Seat Blocking Logic:**  
  Once seats are selected, they stay “blocked” for 10 minutes so other users cannot book them.

- **Auto Release System:**  
  A cron job or backend scheduler automatically releases blocked seats if payment remains pending.

- **Secure Payment Flow:**  
  Stripe test payment gateway ensures safe and seamless online transactions.

- **Clean & Responsive UI:**  
  Built using React + Tailwind CSS for a smooth experience across all devices.

---

## 🛠️ Tech Stack

### **Frontend**
- React.js  
- Tailwind CSS  
- Axios  
- React Router  

### **Backend**
- Node.js  
- Express.js  
- MongoDB (Mongoose ORM)  
- JSON Web Tokens (JWT)  
- Stripe API  

### **Other Tools**
- Git & GitHub  
- dotenv for environment variables  
- Postman for API testing  

---

## 📁 Folder Structure

QuickShow/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ ├── context/
│ │ └── App.js
│ └── package.json
│
├── server/ # Node/Express Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── .env
├── README.md
└── package.json



---

## ⚙️ Installation & Setup

### **1. Clone the repository**

```bash
git clone https://github.com/Rohit31-ui/quickshow.git
cd quickshow

2. Install dependencies
Backend:
cd server
npm install

Frontend:
cd ../client
npm install
```

## 🔐 Environment Variables

Create a .env file inside the server/ folder with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
CLIENT_URL=http://localhost:5173

## ▶️ Running the App
Start Backend:
cd server
npm run dev

Start Frontend:
cd client
npm run dev


The app will be available at:
## Frontend: http://localhost:5173

##  Backend: http://localhost:3000

##🔌 API Overview (Short)
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
GET	/api/movies	Get all movies
GET	/api/shows/:movieId	Get show timings
POST	/api/book	Create booking
POST	/api/payment/stripe	Stripe payment
GET	/api/bookings/me	Get user bookings
PATCH	/api/book/release	Auto release seats
📸 Demo Screenshots (Add your images)
![Home Page](./screenshots/home.png)
![Seat Selection](./screenshots/seat.png)
![Payment Page](./screenshots/payment.png)
![Booking Success](./screenshots/success.png)

## 🚀 Future Enhancements

Admin dashboard for managing movies & shows

Email notification on successful booking

Real-time seat updates using WebSockets

QR-code ticket generation

Dark mode UI

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Rohit Lad
Portfolio: https://rohit-lad.netlify.app

GitHub: https://github.com/Rohit31-ui

LinkedIn: https://linkedin.com/in/rohit-lad


