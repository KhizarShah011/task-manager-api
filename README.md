# Task Manager API

A simple, well-structured **RESTful API** built with **Node.js** and **Express** that manages a list of tasks. It demonstrates clean route design and full CRUD operations — a solid back-end foundation that can be wired to any front-end.

## ✨ Features

- Full **CRUD** support (Create, Read, Update, Delete)
- JSON request/response
- Proper HTTP status codes (`200`, `201`, `400`, `404`)
- Clear, readable route handlers

## 🛠️ Built With

- Node.js
- Express

## 🚀 Getting Started

```bash
git clone https://github.com/KhizarShah011/task-manager-api.git
cd task-manager-api
npm install
npm start
```

The server runs at `http://localhost:3000`.

## 📚 API Endpoints

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| GET    | `/api/tasks`      | List all tasks        |
| GET    | `/api/tasks/:id`  | Get a single task     |
| POST   | `/api/tasks`      | Create a new task     |
| PUT    | `/api/tasks/:id`  | Update a task         |
| DELETE | `/api/tasks/:id`  | Delete a task         |

### Example: create a task

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Write documentation"}'
```

## 🗺️ Roadmap

- [ ] Persist tasks in a database (MongoDB / PostgreSQL)
- [ ] Add input validation middleware
- [ ] Add authentication

## 📫 Contact

- Email: imkhizarshah11@gmail.com
- GitHub: [@KhizarShah011](https://github.com/KhizarShah011)

---

> Built and maintained by Khizar Shah.
