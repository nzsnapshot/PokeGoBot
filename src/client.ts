/* eslint-disable import/first */
import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import {
  Intents,
  Interaction,
  Message,
  MessageEmbed,
  TextChannel,
  MessageOptions,
} from "discord.js";
import { Client } from "discordx";
import { dirname, importx } from "@discordx/importer";

if (!process.env.TOKEN) throw new Error("Token not found");
if (!process.env.MONGO) throw new Error("Mongo uri not found");
import { DB } from "./database/db.ts";
import config from "./config.ts";
const client = new Client({
  simpleCommand: {
    prefix: "!",
  },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
  botGuilds: [config.guildId],
  // If you only want to use guild commands, uncomment this line
  // botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
  silent: false,
});

client.once("ready", async () => {
  // init all application commands
  await client.clearApplicationCommands(config.guildId);
  await client.initApplicationCommands({
    guild: { log: true },
  });

  // init permissions; enabled log to see changes
  await client.initApplicationPermissions();
  console.log("Bot started");
});

client.on("interactionCreate", (interaction: Interaction) => {
  client.executeInteraction(interaction);
});

client.on("messageCreate", (message: Message) => {
  client.executeCommand(message);
});

async function run() {
  // with cjs
  // await importx(__dirname + "/{events,commands}/**/*.{ts,js}");
  // with ems

  await importx(dirname(import.meta.url) + "/{events,commands}/**/*.{ts,js}");
  client.login(process.env.TOKEN);
}

DB.connect(process.env.MONGO || "");
run();
