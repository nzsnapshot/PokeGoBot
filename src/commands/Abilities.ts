import {
  ButtonInteraction,
  CommandInteraction,
  MessageButton,
  MessageActionRow,
  Snowflake,
  MessageEmbed,
  User,
  MessageAttachment,
  GuildMember,
  TextChannel,
  Client,
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

import pkgr from "canvas";
const { loadImage, createImageData, Image, createCanvas } = pkgr;

import pkgd from "colorthief";
const { ColorThief, getColor } = pkgd;

import pkg from "pokenode-ts";
const { PokemonClient } = pkg;

interface AbilityList {
  name: string;
  hidden: boolean;
}

const rgbToHex = (r: number, g: number, b: number) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

@Discord()
class Abilities {
  @SimpleCommand("abilities")
  async abilities(
    @SimpleCommandOption("pokemonname", { type: "STRING" })
    pokemonname: string,
    command: SimpleCommandMessage,
    client: Client
  ) {
    const api = new PokemonClient(); // create an PokemonClient

    await api
      .getPokemonByName(pokemonname)
      .then(async (data) => {
        let abilities: AbilityList[] = [];
        console.log(data);
        data.abilities.forEach((ability) => {
          abilities.push({
            name: ability.ability.name,
            hidden: ability.is_hidden,
          });
        });

        const canvas = createCanvas(50, 50);
        const context = canvas.getContext("2d");
        const myimg = await loadImage(data.sprites.front_default);
        context.drawImage(myimg, 0, 0, canvas.width, canvas.height);
        const yeet = await getColor(canvas.toDataURL(), 10);
        const applicationEmbed = new MessageEmbed()
          .setAuthor(pokemonname.toUpperCase(), client.user.avatarURL())
          .setThumbnail(data.sprites.front_default)
          .setDescription(`Pokemon ID: **${data.id}**`)
          .setTimestamp()
          .setColor(yeet)
          .setFooter("Pokemon Go Helper");
        command.message.reply({
          embeds: [applicationEmbed],
        });
      })
      .catch((error) => console.error(error));
  }
}
