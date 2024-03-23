const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_ADMIN}:${process.env.MONGODB_KEY}@cluster0.g79vat7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log("Conexão realizada");
    } catch (e) {
        console.error("Erro:", e);
    }
};

module.exports = connectToDatabase;