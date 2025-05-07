import { app } from "./app";
import { Request, Response } from "express";
import { getHandler } from "@hono/node-server";

const handler = getHandler(app);

export default async function vercelHandler(req: Request, res: Response) {
  await handler(req, res);
}