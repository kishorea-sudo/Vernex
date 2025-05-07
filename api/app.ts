import express, { type Request, Response, NextFunction, Router } from "express";
import handler from "./hello";

const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all("/api/hello", async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
        const status = error.status || error.statusCode || 500;
        const message = error.message || "Internal Server Error";
        res.status(status).json({ message });
    }
  });
  
app.all("/api/world", async (req, res) => {
    try {
      res.status(200).send("Hello World");
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
  });

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
});

export default app;