const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection succesful to data base");

    } catch (error) {
        console.error({error, mes:"database connect failed"});
        process.exit(0);

    }
}

module.exports = connectDb;