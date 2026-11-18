import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";
import adventureRoutes from "./modules/adventures/adventure.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    application: "Prenj Adventures API"
  });
});

app.use("/api/adventures", adventureRoutes);

// Must be registered after all routes
app.use(errorHandler);

export default app;