import { Notifications } from "./Notifications.ts";
import { Avatars } from "./Avatars.ts";
import { Servers } from "./Servers.ts";
import { Users } from "./Users.ts";
import { Logs } from "./Logs.ts";
import { Log } from "../Log.ts";
import { Tradings } from "./Tradings.ts";

import pkg from "mongoose";
const { model, connect, Model, Schema, UpdateQuery } = pkg;

export class DB {
  public static readonly Users = new Users();
  public static readonly Avatars = new Avatars();
  public static readonly Servers = new Servers();
  public static readonly Notifications = new Notifications();
  public static readonly Logs = new Logs();
  public static readonly Trading = new Tradings();

  public static async connect(uri: string): Promise<void> {
    return connect(uri, (error) => {
      if (error) {
        Log.error("db.ts", `Can't connect database`, {
          uri: uri,
          error: error,
        });
        return;
      }
      Log.info("db.ts", "Database connected");
    });
  }
}
