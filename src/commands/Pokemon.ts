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
// const { PokemonClient } = pkg;

// interface Abilities {
//   name: string
//   hidden: boolean
// }

// @Discord()
// class Pokemon {
//   @Slash("pokemon")
//   async pokemon(
//     @SlashOption("pokemonname", { required: true, type: "STRING" })
//     pokemonname: string | undefined,
//     interaction: CommandInteraction
//   ) {
//     const api = new PokemonClient(); // create an PokemonClient

//     await api
//       .getPokemonByName(pokemonname)
//       .then((data) => {
//         let abilities: Abilities[] = []
//         data.abilities.forEach((ability) => {
//           abilities.push({ name: ability.ability.name, hidden: ability.is_hidden })
//         })
//         console.log(abilities)
//         // const applicationEmbed = new MessageEmbed()
//         //   .setAuthor("Lucid Staff Helper")
//         //   .setTitle("Total people passed through the waiting room")
//         //   .setDescription()
//         //   .setColor("#1B033C")
//         //   .setTimestamp()
//         //   .setFooter("Lucid Staff Helper", client.user.avatarURL());
//         // interaction.reply({
//         //   content: "Gokus",
//         //   embeds: [applicationEmbed],
//         // });
//       })
//       .catch((error) => console.error(error));
//     // await interaction.deferReply();

//     //   const helloBtn = new MessageButton()
//     //     .setLabel("Hello")
//     //     .setEmoji("👋")
//     //     .setStyle("PRIMARY")
//     //     .setCustomId("hello-btn");

//     //   const row = new MessageActionRow().addComponents(helloBtn);

//     //   interaction.editReply({
//     //     content: `${user}, Say hello to bot`,
//     //     components: [row],
//     //   });
//     // }
//   }
// }
