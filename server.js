// Task Manager API
// A simple RESTful API built with Node.js + Express.
// Supports full CRUD operations on an in-memory task list.

const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// In-memory data store (swap for a real database in production)
let tasks = [
  { id: 1, title: "Learn Express", completed: true },
  { id: 2, title: "Build a REST API", completed: false },
];
let nextId = 3;

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Task Manager API is running" });
});

// GET all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// GET a single task by id
app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

// CREATE a new task
app.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

// UPDATE a task
app.put("/api/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });

  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.json(task);
});

// DELETE a task
app.delete("/api/tasks/:id", (req, res) => {
  const index = tasks.findIndex((t) => t.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  const [removed] = tasks.splice(index, 1);
  res.json(removed);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
