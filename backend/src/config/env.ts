import "dotenv/config";

export const PORT = Number(process.env.PORT ?? 3000);
export const NODE_ENV = process.env.NODE_ENV ?? "development";
export const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017/prenj-adventures";