import type { ArgsOf } from "discordx";
import { Discord, On, Client, GuardFunction } from "discordx";
import { config } from "../config";

export const NotSelf: GuardFunction<"message"> = (
  message: ArgsOf<"message">,
  client: Client,
  next
) => {
  if (client.user.id !== message.message.author.id) {
    next();
  }
};
// export const NotSelf: GuardFunction<"message"> = (
//   [message]: ArgsOf<"commandMessage">,
//   client: Client,
//   next
// ) => {
//   if (client.user.id !== message.author.id) {
//     next();
//   }
// };
