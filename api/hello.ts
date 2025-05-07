import { type Request, type Response } from "express";

async function handler(req: Request, res: Response) {  
    res.status(200).send("Hello World");
}

export default handler;

