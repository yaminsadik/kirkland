import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = 3000; // set port at .env file when production ready

// Test route to verify server is working
app.get("/", (req, res) => {
	res.send("Express server is working!");
  });

app.listen(PORT, () => {
	connectDB();
	console.log(`Server started at http://localhost:" + ${PORT}`);
});
