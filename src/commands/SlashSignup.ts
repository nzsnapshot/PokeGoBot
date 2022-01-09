// import {
//   ButtonInteraction,
//   CommandInteraction,
//   MessageButton,
//   MessageActionRow,
//   Snowflake,
//   MessageEmbed,
//   User,
//   GuildMember,
//   TextChannel,
// } from "discord.js";
// import { ButtonComponent, Discord, Slash, SlashOption } from "discordx";
// import pkg from "pokenode-ts";

// import { DB } from "../database/db.ts";

// @Discord()
// class Signup {
//   @Slash("signup")
//   async signup(
//     @SlashOption("trainercode", { required: true, type: "STRING" })
//     @SlashOption("level", { required: true, type: "NUMBER" })
//     trainercode: string,
//     level: number,
//     interaction: CommandInteraction
//   ) {
//     const trainerCode = DB.Users.fetchByTrainerCode(trainercode);
//     const user = DB.User.fetchByUserId(interaction.user.id);

//     if (trainerCode) {
//       return interaction.reply(`❌ Trainer code already signed up!`);
//     }
//     if (user) {
//       return interaction.reply(`❌ You're already signed up!`);
//     }

//     DB.Users.insertOne({
//       userID: interaction.user.id,
//       trainerCode: trainercode,
//       level: level,
//     })
//       .then((res) => {
//         interaction.reply(
//           `✅ You have signed up! with trainer code: **${trainercode}**`
//         );
//       })
//       .catch((err) => {
//         interaction.reply(`❌ Fucked up somewhere, try again!`);
//       });
//   }
// }
