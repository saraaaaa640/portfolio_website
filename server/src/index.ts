import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

// Import routes
import authRoutes from "./routes/auth.routes";
import adminRoutes from "./routes/admin.routes";

// Import project routes
import projectRoutes from "./routes/project.routes";
// imoprt message routes
import messageRoutes from "./routes/message.routes";
import skillRoutes from "./routes/skill.routes";
import cors from "cors";


// Load environment variables from .env file
dotenv.config();

const app = express();
// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow only your React app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware to parse JSON bodies
app.use(express.json());

connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/skills", skillRoutes);

app.use((req, res, next) => {
  console.log(`🌍 Incoming Request: ${req.method} ${req.url}`);
  next();
});

// Start the 
app.listen(5000, () => {
  console.log("Server running");
});

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));