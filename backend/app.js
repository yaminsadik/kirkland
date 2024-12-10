import express from "express";
import cookieParser from "cookie-parser"; //helps parse cookies sent by the client, often used for authentication
import bodyParser from "body-parser"; //processes incoming request data
import cors from "cors"; //enables the server to handle request from other origins, if front-end hosted on a different domain
import helmet from "helmet"; //adds security related http headers to protect the app from common vulnerabilities
import dotenv from 'dotenv';

//Importing Routes
import listing from "./controllers/listing.js";
import booking from "./controllers/booking.js";
import user from "./controllers/user.js";


//Initialize express
const app = express();

// setting up middleware
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

//parsing request data
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//Cross-Origin Requests
app.use(
  cors({
    origin: "https://chireva-rentals.vercel.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json()); //Parse inscoming JSON
app.use(cookieParser()); //Processes cookies sent by the client
app.use(express.static("public")); //serves static file

//Setting up a basic route
app.get("/", (req, res) => {
  res.send("Hello world! Your Server is Running...");
});

//configure environment variable
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "../.env",
  });
}

//using the routes
app.use("/api/v2/listing", listing);
app.use("/api/v2/booking", booking);
app.use("/api/v2/user", user);

export default app;