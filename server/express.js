import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import educationRoutes from "./routes/education.routes.js";
import projectRoutes from "./routes/projects.routes.js";
import errorHandler from "./controllers/error.controller.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/qualifications", educationRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

app.use(errorHandler.handleError);

export default app;
