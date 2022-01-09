import { DB } from "./database/db.ts";

export class Log {
  private static readonly red = "\x1b[31m%s\x1b[0m";
  private static readonly yellow = "\x1b[33m%s\x1b[0m";
  private static readonly blue = "\x1b[34m%s\x1b[0m";

  static error(origin: string, message: string, data?: any): void {
    console.log(this.red, origin + " -> " + message);
    DB.Logs.insertOne({
      type: "error",
      time: new Date(),
      origin: origin,
      message: message,
      payload: JSON.stringify(data),
    });
  }

  static warning(origin: string, message: string, data?: any): void {
    console.log(this.yellow, origin + " -> " + message);
    DB.Logs.insertOne({
      type: "warning",
      time: new Date(),
      origin: origin,
      message: message,
      payload: JSON.stringify(data),
    });
  }

  static info(origin: string, message: string, data?: any): void {
    console.log(this.blue, origin + " -> " + message);
    DB.Logs.insertOne({
      type: "info",
      time: new Date(),
      origin: origin,
      message: message,
      payload: JSON.stringify(data),
    });
  }
}
