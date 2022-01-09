import {
  Discord,
  SimpleCommand,
  SimpleCommandMessage,
  SimpleCommandOption,
} from "discordx";
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
import axios from "axios";

@Discord()
class Weather {
  @SimpleCommand("weather")
  async weather(command: SimpleCommandMessage) {
    // axios get request with headers
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const response = await axios.get(
      "http://pogoapi.net/api/v1/weather_boosts.json",
      {
        headers,
      }
    );
    const author = command.message.author.avatarURL();
    const weatherEmbed = new MessageEmbed()
      .setTitle(`What pokemon can be found in different weather conditions`)
      .setColor("#0099ff")
      .setTimestamp()
      .setAuthor("Pokemon Weather", author)
      .setFooter("Snapbot", "https://i.imgur.com/TZTdDZT.png");
    for (const [key, value] of Object.entries(response.data)) {
      let yeet: any = value;
      let str = "";
      for (let i = 0; i < yeet.length; i++) {
        const element = yeet[i];
        str += `- ${element}\n`;
      }
      weatherEmbed.addField(key, str, true);
    }

    command.message.reply({
      embeds: [weatherEmbed],
    });
  }
}
