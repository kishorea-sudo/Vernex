import { type Express } from "express";
import { createServer as createViteServer } from "vite";
import path from "node:path";
import fs from "node:fs";
import { Server } from "node:http";

export const setupVite = async (app: Express, server: Server) => {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: {
        port: 5173,
      },
    },
    appType: "custom",
    root: path.resolve("./client"),
    configFile: path.resolve("./vite.config.ts"),
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;
      let template: string = await fs.promises.readFile(
        path.resolve("./client/index.html"),
        "utf-8",
      );

      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (err) {
      vite.ssrFixStacktrace(err as any);
      console.error(err);
      res.status(500).end((err as any).message);
    }
  });
};

export const serveStatic = (app: Express) => {
  const clientBuild = path.join(path.resolve("./client/dist"));
  app.use(express.static(clientBuild));

  app.use("*", (req, res) => {
    const indexHtml = path.join(clientBuild, "index.html");
    res.sendFile(indexHtml);
  });
};

export const log = (...args: any[]) => {
  console.log(new Date().toISOString(), ...args);
};