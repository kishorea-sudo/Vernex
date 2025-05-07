import express, { type Request, Response, NextFunction } from "express";
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

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
});

export { app };