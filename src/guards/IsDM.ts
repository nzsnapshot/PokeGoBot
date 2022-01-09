import type { ArgsOf } from "discordx";
import { Discord, On, Client, GuardFunction } from "discordx";
import { config } from "../config.ts";
export const NotDM: GuardFunction<"message"> = (
  message: ArgsOf<"message">,
  client: Client,
  next
) => {
  if (message.message.channel.type === "dm") {
    next();
  }
};
