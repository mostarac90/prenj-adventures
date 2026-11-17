import "dotenv/config";
import app from "./app.js";

const PORT = Number(process.env.PORT ?? 3000);

app.listen(PORT, () => {
  console.log(`Prenj Adventures API running on port ${PORT}`);
});