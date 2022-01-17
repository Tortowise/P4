require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 5000;
const sequelize = require('./db.js');
const app = express();
const models = require('./models/models.js');

const start = async  () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
