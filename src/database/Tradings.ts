import pkg from "mongoose";
const { model, Model, Schema, UpdateQuery } = pkg;
import { collections, server as defServer } from "./../config/Database.ts";

export interface Trading {
  userId: string;
  level: number;
  active: boolean;
}

export class Tradings {
  private readonly TradingModel: Model<Trading>;

  constructor() {
    this.TradingModel = model<Trading>(
      collections.tradings,
      this.getTradingSchema()
    );
  }

  private getTradingSchema(): Schema<Trading> {
    return new Schema<Trading>({
      userId: String,
      level: Number,
      active: Boolean,
    });
  }

  // public async count(): Promise<number> {
  //   return this.ServersModel.countDocuments({});
  // }

  // public async getAll(): Promise<Trading[]> {
  //   return this.ServersModel.find({});
  // }

  // public async fetchByServerId(serverID: string): Promise<Trading> {
  //   const server = await this.ServersModel.findOne({ serverID: serverID });
  //   if (server) return server;

  //   return this.insertNew(serverID);
  // }

  // public async insertNew(serverID: string): Promise<Trading> {
  //   return this.insertOne({ serverID: serverID, ...defServer });
  // }

  // public async insertOne(server: Server): Promise<Trading> {
  //   return new this.ServersModel(server).save();
  // }

  // public async updateOneByServerId(
  //   serverID: string,
  //   options: UpdateQuery<Trading>
  // ): Promise<UpdateQuery<Trading>> {
  //   return await this.ServersModel.updateOne({ serverID: serverID }, options);
  // }

  // public async deleteOneByServerId(
  //   serverID: string
  // ): Promise<{ acknowledged: boolean; deletedCount: number }> {
  //   return await this.ServersModel.deleteOne({ serverID: serverID });
  // }
}
