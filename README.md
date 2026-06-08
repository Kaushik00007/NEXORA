# 🚀 NEXORA – Project Management App

## 🧩 Introduction
**NEXORA** is a modern project management web application built to help teams organize, collaborate, and track progress efficiently.  
Designed with simplicity and performance in mind, NEXORA empowers individuals and teams to plan, monitor, and execute projects seamlessly from anywhere.

## 🎯 Features
☑️ **Project Creation & Tracking** – Easily create and manage projects with detailed task overviews.  
☑️ **Intuitive Dashboard** – Visualize ongoing tasks, team progress, and project timelines at a glance.  
☑️ **Task Management** – Assign, prioritize, and update tasks in real-time.  
☑️ **Secure Authentication** – User-friendly sign-in and sign-up system with validation.  
☑️ **Responsive Design** – Optimized for desktop and mobile devices.  
☑️ **Team Collaboration** – Simplifies communication and keeps everyone on the same page.  
☑️ **Clean UI Animation** – Smooth and modern interface built with styled-components.  

## 🛠 Tech Stack
- **React.js** – Frontend framework  
- **Styled-Components** – Component-level styling  
- **Redux** – State management  
- **Material UI** – Icons and UI elements  
- **JavaScript (ES6)** – Core language  
- **Node.js / Express (Optional)** – Backend integration ready  
- **GitHub Pages / Vercel** – Deployment-ready frontend  

## ⚙️ How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js** and **Docker** installed.

### 2. Start the MongoDB Database (via Docker)
Run the MongoDB container on port `27017` (we use version `4.4` to ensure compatibility and avoid AVX CPU instruction requirements):
```bash
docker start nexora-mongodb || docker run -d --name nexora-mongodb -p 27017:27017 mongo:4.4
```

### 3. Start the Backend Express Server
Navigate to the `Backend` directory and start the server:
```bash
cd Backend
# Install dependencies (only required first time)
npm install
# Start the development server (nodemon)
npm run dev
```
The backend server runs on `http://localhost:8700`.

### 4. Start the Frontend React App
Navigate to the `Frontend` directory and start the React dev server:
```bash
cd Frontend
# Install dependencies (only required first time)
npm install
# Start the React app
npm start
```
Your app will be available at: 👉 `http://localhost:3000`
---

## 🖥️ Usage
1. Sign up or sign in to your account.  
2. Create a **new project** and add key details.  
3. Add or assign **tasks** to track project progress.  
4. View progress in real-time using the intuitive dashboard.  
5. Collaborate and update project status as your team works together.  

---

## 🌟 Future Enhancements
- **Team Chat Integration** for seamless communication.  
- **File Upload Support** for project assets.  
- **Dark Mode UI** for better accessibility.  
- **Progress Analytics Dashboard** powered by charts and insights.  
- **Integration with Cloud Storage** (GCP / AWS).  

---

## 🙌 Contributions
Contributions are welcome! Follow these steps:
```
Fork the repository  
Create a new branch  
Commit your changes  
Push to your fork  
Open a pull request  
```

---

## 📧 Contact
For queries or collaboration, reach out via:  
- 📧 Email: kaushi00007@gmail.com  
- 🔗 LinkedIn: [Kaushik K Dev](https://www.linkedin.com/in/kaushik-k-dev)  
- 🌍 GitHub: [Kaushik00007](https://github.com/Kaushik00007)

---

## 💻 Built with Passion using React, Redux, and Styled Components.  
