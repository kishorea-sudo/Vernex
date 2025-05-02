import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from '@shared/schema';
import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const message = await storage.createContact(contactData);
      
      res.status(201).json({
        success: true,
        message: "Contact message sent successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form"
        });
      }
    }
  });

  // Get all contact messages - for demonstration
  app.get("/api/contacts", async (_req: Request, res: Response) => {
    try {
      const contacts = await storage.getAllContacts();
      res.status(200).json({
        success: true,
        data: contacts
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contacts"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
