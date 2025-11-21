import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";
import authRoutes from "./server/routes/auth.routes.js";
import contactRoutes from "./server/routes/contact.routes.js";
import educationRoutes from "./server/routes/education.routes.js";
import projectRoutes from "./server/routes/project.routes.js";
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  });
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});
app.use("/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/educations", educationRoutes);
app.use("/api/projects", projectRoutes);

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
