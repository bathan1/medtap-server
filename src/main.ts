import express from "express";
import dotenv from "dotenv";

// Load env file and bind env values
dotenv.config();
const PORT = process.env.PORT;

// Scaffold express app
const app = express(); 

app.get("/", (req, res) => {
    res.send("Hi mom");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
