require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});


app.use('/api/v1/products', productsRouter);


app.use(notFoundMiddleware);
app.use(errorMiddleware);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, process.env.HOST, () => 
            console.log(`Server is listening at: http://${process.env.HOST}:${process.env.PORT}`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
