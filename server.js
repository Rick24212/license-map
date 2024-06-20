const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (replace with database in production)
let markers = {};

// Routes
app.post('/save-marker', (req, res) => {
    const { id, text } = req.body;
    markers[id] = text;
    res.json({ message: 'Marker data saved successfully' });
});

app.get('/get-markers', (req, res) => {
    res.json(markers);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});