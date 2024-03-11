// Step 4: Write the Server Code

// Import Express
const express = require('express');

// Initialize Express app
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Set the app to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
