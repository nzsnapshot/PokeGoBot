import pkg from 'mongoose';
const {model, Model, Schema, UpdateQuery } = pkg;
import { collections } from "../config/Database.ts";

export interface Log {
  type: "error" | "warning" | "info";
  time: Date;
  origin: string;
  message: string;
  payload: string;
}

export class Logs {
  private readonly LogsModel: Model<Log>;

  constructor() {
    this.LogsModel = model<Log>(collections.logs, this.getLogSchema());
  }

  private getLogSchema(): Schema<Log> {
    return new Schema<Log>({
      type: String,
      time: Date,
      origin: String,
      message: String,
      payload: String,
    });
  }

  public async insertOne(log: Log): Promise<Log> {
    return new this.LogsModel(log).save();
  }
}
