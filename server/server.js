const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();


mongoose
    .connect(process.env.MONGO_URI || "mongodb+srv://user-commerce:ecommerce@cluster0.7zipw.mongodb.net/")
    .then(() => console.log("MongoDB connected!"))
    .catch((error) => console.log(error));

    const app = express();
    const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173/",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
        ],
        credentials: true,
    })
    );

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`App running on port ${PORT}`));