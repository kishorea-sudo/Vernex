import { type Request, type Response } from "express";

export default async function handler(req: Request, res: Response) {  
    res.status(200).send("Hello World");
}

