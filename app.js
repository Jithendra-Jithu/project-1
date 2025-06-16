const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, email } = req.body;

    // Imagine storing user in a DB here
    console.log(`User ${username} registered`);

    // Call notification service
    try {
        await axios.post('http://notification-service:5000/notify', { username, email });
    } catch (err) {
        console.error('Failed to notify:', err.message);
    }

    res.status(201).send({ message: 'User registered!' });
});

app.listen(3000, () => console.log('User service running on port 3000'));
