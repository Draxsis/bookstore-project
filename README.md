<div align="center">

# 📚 BookStore Management System

**A modern, scalable, full-stack platform for managing and exploring book collections.**

<p align="center">
  <img src="https://img.shields.io/github/last-commit/Draxsis/bookstore-project?style=flat-square&color=FF5722" alt="Last Commit" />
  <img src="https://img.shields.io/github/commit-activity/m/Draxsis/bookstore-project?style=flat-square&color=00C853" alt="Commit Activity" />
  <img src="https://img.shields.io/github/languages/top/Draxsis/bookstore-project?style=flat-square&color=2962FF" alt="Top Language" />
  <img src="https://img.shields.io/github/repo-size/Draxsis/bookstore-project?style=flat-square&color=FFD600" alt="Repo Size" />
</p>

<p align="center">
  <a href="#-live-demo">🌐 Live Demo</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">🧰 Tech Stack</a> •
  <a href="#-installation">⚙️ Installation</a> •
  <a href="#-api-overview">🔌 API</a> •
  <a href="#-contributing">🤝 Contributing</a>
</p>

</div>

---

## 📖 Overview

**BookStore Management System** is a production-ready web application designed to help individuals, startups, and small libraries efficiently manage book inventories.

It focuses on:
- Clean architecture
- Fast UI interactions
- Maintainable backend structure

This repository is intentionally structured to serve as a **reusable template** for future full-stack projects.

---

## 📂 Project Structure

The project is organized using a clean MVC (Model-View-Controller) architecture for the backend and a component-based structure for the frontend.

```text
bookstore-project/
├── backend/
│   ├── config/             # Database configuration (db.js)
│   ├── models/             # Mongoose schemas (bookModel.js)
│   ├── routes/             # Express route definitions
│   ├── index.js            # Entry point for Backend
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components (BackButton, Spinner)
│   │   ├── pages/          # Page views (Home, CreateBook, ShowBook)
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # DOM rendering
│   ├── tailwind.config.js  # Styling configuration
│   └── vite.config.js      # Build tool configuration
└── README.md
```

## 🚀 Deployment

Get this project running on your own infrastructure with one click.

| Service | Deploy Link | Notes |
|:-------:|:-----------:|:-----:|
| **Vercel** | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Draxsis/bookstore-project) | Best for Frontend hosting |
| **Railway** | [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/Draxsis/bookstore-project) | Excellent for Full Stack (Node + Mongo) |

> **Note:** You will need to configure your `mongoDBURL` environment variable.
---

## ✨ Features

| Feature | Description |
|------|------------|
| 🔍 Smart Search | Real-time filtering across book attributes |
| 🛠️ Full CRUD | Create, read, update, and delete books |
| 🗂️ Dual Views | Switch between **Table View** and **Card View** |
| 📱 Responsive UI | Optimized for all screen sizes |
| ⚡ Fast API | Express.js + MongoDB with efficient queries |
| 🔐 Scalable Structure | Ready for auth, roles, and permissions |

---

## 🖼️ Screenshots & Preview

| View | Preview |
|-----|--------|
| Dashboard | ![Dashboard](docs/screenshots/dashboard.png) |
| Table View | ![Table](docs/screenshots/table-view.png) |
| Card View | ![Cards](docs/screenshots/card-view.png) |

---

## 🧰 Tech Stack

| Layer | Technology |
|------|-----------|
| 🎨 Frontend | React.js (Vite) |
| 🚀 Backend | Node.js, Express.js |
| 🗄️ Database | MongoDB, Mongoose |
| 💅 Styling | Tailwind CSS, Material UI |
| 🧪 Tooling | ESLint, Prettier |

---

## ⚙️ Installation

### 📥 Clone the Repository

```bash
git clone https://github.com/Draxsis/bookstore-project.git
cd bookstore-project
```

---

### 🔧 Backend Setup

Create a `.env` file in the root of the backend directory:

| Variable | Description | Required | Default |
|----------|-------------|:--------:|---------|
| `PORT` | The port the backend server listens on | ❌ | `5555` |
| `mongoDBURL` | Your MongoDB Connection String | ✅ | - |
Create a `.env` file:

```bash
cd backend
npm install
```

```env
PORT=5555
mongoDBURL=your_mongodb_connection_string
```

```bash
npm run dev
```

---

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App URL:

```
http://localhost:5173
```

---

## 🔌 API Overview

Full API documentation is available via Postman.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/) 

| Method | Endpoint | Description | Payload Example |
|:------:|----------|-------------|-----------------|
| `GET` | `/books` | Fetch all books | - |
| `GET` | `/books/:id` | Fetch book by ID | - |
| `POST` | `/books` | Create new book | `{ "title": "Dune", "author": "Frank Herbert", "publishYear": 1965 }` |
| `PUT` | `/books/:id` | Update book | `{ "title": "Dune Messiah" }` |
| `DELETE` | `/books/:id` | Delete book | - |
---

## 🗺️ Roadmap

- [ ] Authentication & Authorization (JWT)
- [ ] Role-based access control
- [ ] Pagination & sorting
- [ ] Cloud deployment (Docker)
- [ ] Admin dashboard
- [ ] Test coverage (Jest)

---

## 💡 Tips & Best Practices

| Tip | Why it Matters |
|----|---------------|
| 🧱 Keep features modular | Makes the project easier to extend and refactor |
| 🎯 Start with CRUD first | Ensures a solid data and UI foundation |
| 🧪 Add tests early | Prevents regressions as the app grows |
| 📦 Reuse this structure | Ideal for dashboards and admin panels |
| 📝 Document as you go | README + API docs save future time |

---

## 👥 Contributors

<table align="center">
<tr>
<td align="center">
<a href="https://github.com/Draxsis">
<img src="https://github.com/Draxsis.png" width="90" />
<br />
<sub><b>Mostafa Koolabadi</b></sub>
</a>
</td>
<td align="center">
<a href="https://github.com/Mohammad-M-rahimi">
<img src="https://github.com/Mohammad-M-rahimi.png" width="90" />
<br />
<sub><b>Mohammad Rahimi</b></sub>
</a>
</td>
</tr>
</table>

---

## 🛡️ License

Licensed under the **MIT License**.

See [`LICENSE`](LICENSE.md) for details.

---

<div align="center">

### ⭐ Rate This Project

If this repository helped you learn, build faster, or ship better:

⭐⭐⭐⭐⭐ **Give it a star on GitHub** — it genuinely helps the project grow.

---

**Built with clean architecture, scalability, and reusability in mind.**

📌 Designed to serve as a long-term template for modern full-stack projects.

</div>

