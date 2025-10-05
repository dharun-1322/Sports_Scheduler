const express = require('express');
const path = require('path');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ======= ROUTES =======
app.get('/', (req, res) => {
    res.render('index'); // Make sure views/index.ejs exists
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard'); // Make sure views/dashboard.ejs exists
});

// ======= START SERVER =======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
