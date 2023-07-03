require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        console.log('\ndatabase flushed successfully');
        await Product.create(jsonProducts);
        console.log('\nproducts added successfully');
        console.log('\nDONE');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};


start();
