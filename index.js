const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Configure Express to serve static files
app.use(express.json()); // Middleware to parse JSON bodies

// Custom Request Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// API Route for Contact Form
app.post('/api/contact', (req, res) => {
  console.log('Contact form submission received:');
  console.log(req.body);
  res.status(200).json({ success: true, message: 'Message received' });
});

// API Route for Projects Data
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      title: "Personal Website",
      description: "A modern portfolio site built with Node.js, Express, and OpenClaw.",
      url: "https://github.com/AlexandruLucian/personal_website"
    },
    {
      title: "OpenClaw Integration",
      description: "Automation scripts and skills for managing development workflows.",
      url: "https://github.com/openclaw/openclaw"
    }
  ];
  res.status(200).json(projects);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 404 Handler - Must be the last middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

module.exports = app; // Export for Vercel

// Automated update for issue #16

// Automated update for issue #17
