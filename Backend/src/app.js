import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
    : [];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., mobile apps, Postman)
        if (!origin) return callback(null, true);
    
        // Check against allowed origins
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        // Block unauthorized domains
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true, // Required for cookies/auth headers
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Explicit methods (optional but recommended)
    allowedHeaders: ['Content-Type', 'Authorization'], // Required if using auth headers
    // optionsSuccessStatus: 204 // (Optional, default is fine)
}));


app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
import userDataRouter from "./routes/userData.routes.js";
import contactRouter from "./routes/contact.routes.js";


app.use("/api/v1/admins", userRouter);
app.use("/api/v1/projects", userDataRouter);
app.use("/api/v1/contact", contactRouter);

export { app };
