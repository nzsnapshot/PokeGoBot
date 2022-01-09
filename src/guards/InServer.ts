import type { ArgsOf } from "discordx";
import { Discord, On, Client, GuardFunction } from "discordx";
import { config } from "../config.ts";

export function InServer(serverId: string) {
  const InServer: GuardFunction<"message"> = (
    [message]: ArgsOf<"message">,
    client,
    next
  ) => {
    if (message.guild.id == serverId) {
      next();
    }
  };
  return InServer;
}
