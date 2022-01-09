import {
  ButtonInteraction,
  CommandInteraction,
  MessageButton,
  MessageActionRow,
  Snowflake,
  MessageEmbed,
  User,
  GuildMember,
  TextChannel,
} from "discord.js";
import {
  ButtonComponent,
  Discord,
  Slash,
  SimpleCommand,
  SimpleCommandOption,
  SimpleCommandMessage,
  SlashOption,
} from "discordx";
import pkg from "pokenode-ts";

import { DB } from "../database/db.ts";

@Discord()
class Signup {
  @SimpleCommand("signup")
  async signup(
    @SimpleCommandOption("trainercode", { type: "STRING" })
    @SimpleCommandOption("level", { type: "NUMBER" })
    trainercode: string,
    level: number,
    command: SimpleCommandMessage
  ) {
    const userID = command.message.author.id;
    const trainerCode = await DB.Users.fetchByTrainerCode(trainercode);
    const user = await DB.Users.fetchByUserId(userID);

    if (user) {
      return command.message.reply(`❌ **Discord Account Found**`);
    }

    if (trainerCode) {
      return command.message.reply(`❌ **Trainer Code Found**`);
    }

    DB.Users.insertOne({
      userID: userID,
      trainerCode: trainercode,
      level: level,
    })
      .then((res) => {
        command.message.reply(
          `✅ You have signed up! with trainer code: **${trainercode}**`
        );
      })
      .catch((err) => {
        command.message.reply(`❌ Fucked up somewhere, try again!`);
      });
  }
}
