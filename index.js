const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Configure Express to serve static files

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Personal Website</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <h1>Welcome to My Personal Website!</h1>
        <p>This is the main landing page.</p>
        <p>Powered by OpenClaw & Express.js</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export for Vercel
