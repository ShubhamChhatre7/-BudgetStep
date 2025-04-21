# 👟 BudgetStep

**BudgetStep** is a budget-friendly shoe selling web application aimed at delivering stylish, affordable footwear. Whether you're looking for everyday comfort or trendy sneakers, BudgetStep keeps your wallet and your feet happy.

🔗 **Live Demo**: [budgetstep.onrender.com](https://budgetstep.onrender.com)

---

## ✨ Features

- 🛍️ E-commerce shoe catalog
- 🔍 Product search and filters
- 🧾 Add-to-cart and cart view functionality
- 💳 Budget-focused shopping experience
- 🧑‍💼 Admin-ready architecture for product management
- ⚡ Fast frontend powered by Vite
- 📱 Fully responsive and mobile-friendly

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **React** (Vite)
- **TypeScript/JavaScript**
- **Tailwind CSS**
- **PostCSS**

### 🔹 Backend
- **Node.js**
- **Express.js**
- **Drizzle ORM**
- **REST APIs**

### 🔹 Tools & Config
- **Vite** – build tool for frontend
- **Render** – hosting
- **Git/GitHub** – version control and collaboration

---

## 📁 Folder Structure

```
BudgetStep/
├── attached_assets/        # Screenshots & static assets
├── client/                 # React Frontend
├── server/                 # Express Backend
├── shared/                 # Shared configs and components
├── drizzle.config.ts       # Drizzle ORM config
├── tailwind.config.ts      # Tailwind CSS settings
├── vite.config.ts          # Vite bundler config
├── tsconfig.json           # TypeScript settings
└── package.json            # App dependencies and scripts
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ShubhamChhatre7/-BudgetStep.git
cd BudgetStep
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
App will start at: [http://localhost:3000](http://localhost:3000)

---

## 🌐 API Overview (Backend)

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/api/products`      | Get all shoes                |
| GET    | `/api/products/:id`  | Get shoe by ID               |
| POST   | `/api/cart`          | Add item to cart             |
| GET    | `/api/cart`          | Fetch cart contents          |
| DELETE | `/api/cart/:id`      | Remove item from cart        |

> Backend is under `server/` folder. APIs built using Express.js.

---

## 🌍 Deployment

The project is deployed on **Render**:

🔗 [https://budgetstep.onrender.com](https://budgetstep.onrender.com)

### Deploy Yourself

You can deploy the app on:

- **Frontend**: Vercel / Netlify
- **Backend**: Render / Railway / Heroku

---

## 📦 Scripts

```bash
npm run dev         # Run in development
npm run build       # Build for production
npm run preview     # Preview built app
```

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the project and submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Shubham R. Chhatre**  
🧑‍🎓 B.Tech (Electronics & Telecommunication) – SB Jain Institute of Technology, Nagpur  
🔗 GitHub: [@ShubhamChhatre7](https://github.com/ShubhamChhatre7)  
📧 Email: *[Add your email here if you'd like]*  
📍 India  

---

_This project is part of my personal portfolio. Feedback and suggestions are always welcome!_
