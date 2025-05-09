import express, { type Express } from "express";

export const registerRoutes = async (app: Express) => {

  const server = express.Router();

  app.use("/api", server);
  return app.listen({ port: 0, host: "0.0.0.0", reusePort: true });
};