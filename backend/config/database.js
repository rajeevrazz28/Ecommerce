const mongoose = require('mongoose');
// const MONGO_URI='mongodb+srv://r4zz:r4zz@123@cluster0.g0dnjhz.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;