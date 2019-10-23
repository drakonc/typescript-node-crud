import express, { Application } from "express";
import morgan from "morgan";

export class Aplicacion {
  app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middleware();
    this.routers();
  }

  private settings(): void {
    this.app.set("port", process.env.PORT || 3000);
  }

  private middleware() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routers() {}

  async start() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on Port", this.app.get("port"));
  }
}
