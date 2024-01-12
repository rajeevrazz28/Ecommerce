const app = require('./app');
const cloudinary = require('cloudinary');
const PORT = process.env.PORT;
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});



const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI,)
    .then(() => {
        console.log("Mongoose Connected");
    })
    .catch((error) => {
        console.error("Mongoose Connection Error:", error);
    });
}

connectDatabase();



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});
