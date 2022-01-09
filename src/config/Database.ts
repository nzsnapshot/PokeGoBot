import { ICollections } from "./Types";

export const collections: ICollections = {
  users: "users",
  servers: "servers",
  avatars: "avatars",
  notifications: "notifications",
  logs: "logs",
  tradings: "tradings",
};

interface User {
  trainerCode: string | null;
  level: number | null;
}

export const user: User = {
  trainerCode: "0",
  level: 0,
};

export const server: { prefix: string; doEmojis: boolean; doGreetings: false } =
  {
    prefix: "|",
    doEmojis: false,
    doGreetings: false,
  };
