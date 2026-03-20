# 🌊 LittleSplashers – Swim School Management App

<p align="center">
  <b>A clean, responsive frontend prototype for managing children's swim lessons</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML-5-orange?logo=html5" />
  <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/Status-Frontend%20Prototype-success" />
</p>

---

## 📌 Overview

**LittleSplashers** is a frontend prototype of a swim school management system designed to help parents manage their children’s swimming lessons.

This project focuses on:
- Real-world user flows
- Clean UI/UX
- Simulated backend logic using `localStorage`

---

## ✨ Features

### 👤 User Management
- Register and log in
- Persistent sessions using localStorage

### 👶 Child Management
- Add and manage children profiles
- Track readiness for booking

### 📝 Intake Form
- Experience level
- Medical notes
- Safety notes
- Dynamic nap time inputs (max 3)

### 📅 Booking System
- Select date and time
- Book lessons per child
- Prevent booking without intake completion
- Credit-based booking system

### 💳 Pricing & Credits
- Purchase lesson packages
- Credits system:
  - Buy → Store → Use
  - 1 booking = 1 credit

### 📊 Dashboard
- View:
  - Credits
  - Children count
  - Upcoming bookings
- Status indicators:
  - ✅ Ready to book
  - ⚠️ Intake required

---

## 🧩 Data Model
Users (1)
└── Children (many)
└── Bookings (many)


---

## 💳 Payment Integration Plan

This prototype simulates payments, but a real system would integrate Stripe.

### 🔄 Payment Flow:
1. User selects a pricing plan  
2. Frontend sends request to backend  
3. Backend creates Stripe checkout session  
4. User completes payment securely  
5. Stripe confirms payment (webhook)  
6. Credits are added to user account  
7. User can book lessons  

---

## 🛠️ Tech Stack

- HTML5  
- CSS3 (Mobile-First)  
- JavaScript (Vanilla JS)  
- LocalStorage (Simulated backend)  

---

## 📱 Responsive Design

Built using a **mobile-first approach**:
- Optimized for phones 📱  
- Scales cleanly to tablets & desktops 💻  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/littlesplashers.git
```

### 2. Open the project
```bash
cd littlesplashers
```

### 3. Run the app

Open index.html in your browser
(or use Live Server)

##⚠️ Limitations:
- No real backend (uses localStorage)
- No real authentication security
- No real payment integration

## 🔮 Future Improvements
- Backend API (Node.js / .NET)
- Database (PostgreSQL / MongoDB)
- Secure authentication (JWT)
- Real payment integration (Stripe)
- Admin dashboard

## 👨‍💻 Author

Tshegofatso Kgokong:
🌐 Portfolio: https://tshegofatso85.github.io/portfolio/
🔗 LinkedIn: https://www.linkedin.com/in/tshegofatso-kgokong-255529201/
🔴 Live Project: https://swiming-lessons-app-ocy3.vercel.app/
