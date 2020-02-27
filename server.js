const express = require('express');

//Init Middleware
app.use(express.json()); //Used to parse JSON bodies

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
