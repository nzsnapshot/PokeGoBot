import type { ArgsOf } from "discordx";
import { Discord, On, Client, GuardFunction } from "discordx";
import { config } from "../config";

export function Prefix(text: string) {
    const Prefix: GuardFunction<'message'> = async ([message]: ArgsOf<'message'>, client, next) => {
        if (message.content.startsWith(text)) {
            await next();
        }
    };
    return Prefix;
}