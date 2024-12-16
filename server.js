import express from 'express';
import db from './config/connection.js';
import routes from './routes/index.js'; 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Forward all API routes
app.use('/api', routes);

// Start server and connect to database
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API running on port ${PORT}!`);
    });
});

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next();
});
app.get('/test', (req, res) => res.send('Test route works!'));


