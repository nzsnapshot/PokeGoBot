import pkg from "mongoose";
const { model, Model, Schema, UpdateQuery } = pkg;
import { collections, user as defUser } from "./../config/Database.ts";

export interface User {
  userID: string;
  trainerCode: string;
  level?: number;
}

export class Users {
  private readonly UsersModel: Model<User>;

  constructor() {
    this.UsersModel = model<User>(collections.users, this.getUserSchema());
  }

  private getUserSchema(): Schema<User> {
    return new Schema<User>({
      userID: String,
      trainerCode: String,
      level: Number,
    });
  }

  public async count(): Promise<number> {
    return this.UsersModel.countDocuments({});
  }

  public async getAll(): Promise<User[]> {
    return this.UsersModel.find({});
  }

  public async fetchByUserId(userID: string): Promise<User> {
    const user = await this.UsersModel.findOne({ userID: userID });
    if (user) return user;

    return 
  }

  public async fetchByTrainerCode(trainerCode: string): Promise<User> {
    const user = await this.UsersModel.findOne({ trainerCode: trainerCode });
    if (user) return user;
  }

  public async insertOne(user: User): Promise<User> {
    return new this.UsersModel(user).save();
  }

  public async updateByUserId(
    userID: string,
    options: UpdateQuery<User>
  ): Promise<UpdateQuery<User>> {
    return this.UsersModel.updateOne({ userID: userID }, options);
  }

  public async deleteByUserId(
    userID: string
  ): Promise<{ acknowledged: boolean; deletedCount: number }> {
    return this.UsersModel.deleteOne({ userID: userID });
  }
}
