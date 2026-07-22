import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config();
console.log(process.env.MONGO_URI);
connectDB();

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});

// for middlawe

app.use(express.json());
