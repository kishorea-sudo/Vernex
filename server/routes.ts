import { Express } from "express";
import express from "express";

export const registerRoutes = (app: Express) => {
  const router = express.Router();

  // Sample route
  router.get("/ping", (_, res) => {
    res.json({ pong: true });
  });

  app.use("/api", router);
};
