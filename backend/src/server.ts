import "dotenv/config";
import app from "./app.js";
    
import { connectDatabase } from "./config/database.js";
import { PORT } from "./config/env.js";


connectDatabase();

app.listen(PORT, () => {
  console.log(`Prenj Adventures API running on port ${PORT}`);
}).on("error", (error) => {
  console.error("Failed to start server", error);
});