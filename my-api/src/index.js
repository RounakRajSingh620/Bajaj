const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/bfhl', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
